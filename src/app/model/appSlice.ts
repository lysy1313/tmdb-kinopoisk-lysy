import { THEME_MODE_LS } from '@/common/constants/constants';
import { createAppSlice } from '@/common/utils/createAppSlice';
import { loadState } from '@/common/utils/localStorage';

export type ThemeMode = 'light' | 'dark';

export const appSlice = createAppSlice({
  name: 'app',
  initialState: {
    themeMode: loadState(THEME_MODE_LS, 'dark') as ThemeMode,
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
  },
  reducers: (create) => ({
    toggleTheme: create.reducer((state) => {
      const newTheme = state.themeMode === 'light' ? 'dark' : 'light';
      state.themeMode = newTheme;
    }),
  }),
});

export const { selectThemeMode } = appSlice.selectors;
export const { toggleTheme } = appSlice.actions;
