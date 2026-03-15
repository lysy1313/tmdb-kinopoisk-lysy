import { FAVORITES_LS } from '@/common/constants/constants';
import { saveState } from '@/common/utils/localStorage';
import { favoritesSlice } from '@/features/FavoritesPage/model/favoritesSlice';
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const storageMiddleware = createListenerMiddleware();

const startAppListening = storageMiddleware.startListening.withTypes<RootState>();

startAppListening({
  matcher: isAnyOf(favoritesSlice.actions.toggleFavoritesMovie),
  effect: (_, listenerApi) => {
    saveState(FAVORITES_LS, listenerApi.getState().favorites.favoritesMovies);
  },
});
