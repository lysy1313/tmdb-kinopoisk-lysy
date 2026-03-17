import { THEME_MODE_LS } from '@/common/constants/constants';
import type { RequestStatus } from '@/common/types/types';
import { createAppSlice } from '@/common/utils/createAppSlice';
import { loadState } from '@/common/utils/localStorage';
import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

export const appSlice = createAppSlice({
  name: 'app',
  initialState: {
    themeMode: loadState(THEME_MODE_LS, 'dark') as ThemeMode,
    status: 'idle' as RequestStatus,
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectStatus: (state) => state.status,
  },
  reducers: (create) => ({
    toggleTheme: create.reducer((state) => {
      const newTheme = state.themeMode === 'light' ? 'dark' : 'light';
      state.themeMode = newTheme;
    }),
  }),
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(isFulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addMatcher(isRejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { selectThemeMode, selectStatus } = appSlice.selectors;
export const { toggleTheme } = appSlice.actions;
