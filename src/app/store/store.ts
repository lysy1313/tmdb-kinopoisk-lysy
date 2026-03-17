import { favoritesSlice } from '@/features/FavoritesPage/model/favoritesSlice';
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../api/baseApi';
import { storageMiddleware } from './middleware/storageMiddleware';
import { filteredMoviesSlice } from '@/features/FilteredMoviesPage/model/filteredMoviesSlice';
import { appSlice } from '../model/appSlice';

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
    [filteredMoviesSlice.name]: filteredMoviesSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).prepend(storageMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
