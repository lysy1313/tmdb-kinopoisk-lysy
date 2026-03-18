import type { FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { isErrorWithMessage } from './isErrorWithMessage';

export const handleError = (result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>) => {
  let error = 'Some error occurred';

  if (result.error) {
    switch (result.error.status) {
      case 'FETCH_ERROR':
      case 'PARSING_ERROR':
      case 'CUSTOM_ERROR':
      case 'TIMEOUT_ERROR':
        error = result.error.error;
        break;
      case 400:
      case 401:
      case 403:
      case 404:
      case 405:
      case 406:
        if (isErrorWithMessage(result.error.data)) {
          error = result.error.data.status_message;
        } else {
          error = JSON.stringify(result.error.data);
        }
        break;
      default:
        if (result.error.status >= 500 && result.error.status < 600) {
          error = 'Server error occurred. Please try again later.';
        } else {
          error = JSON.stringify(result.error);
        }
        break;
    }
    toast(error, { type: 'error', position: 'top-center', theme: 'dark' });
  }

  // if ((result.data as { resultCode: ResultCode }).resultCode === ResultCode.Error) {
  //   const messages = (result.data as { messages: string[] }).messages;
  //   error = messages.length ? messages[0] : error;
  //   api.dispatch(setAppErrorAC({ error }));
  // }
};
