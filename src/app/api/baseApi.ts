import { handleError } from '@/common/utils/handleError';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: async (_args, api, extraOptions) => {
    const res = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`);
      },
    })(_args, api, extraOptions);
    handleError(res);

    return res;
  },
  endpoints: () => ({}),
});
