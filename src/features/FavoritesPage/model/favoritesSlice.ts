import { FAVORITES_LS } from '@/common/constants/constants';
import { createAppSlice } from '@/common/utils/createAppSlice';
import { loadState } from '@/common/utils/localStorage';
import type { Movie } from '@/features/MainPage/api/movie.types';

export type Favorites = Pick<Movie, 'id' | 'title' | 'poster_path' | 'vote_average'>;

export const favoritesSlice = createAppSlice({
  name: 'favorites',
  initialState: {
    favoritesMovies: loadState(FAVORITES_LS, []) as Favorites[],
  },
  selectors: {
    selectFavoritesMovies: (state) => state.favoritesMovies,
    selectIsFavorite: (state, id: number) => state.favoritesMovies.some((m) => m.id === id),
  },
  reducers: (create) => ({
    toggleFavoritesMovie: create.reducer<{ favorite: Favorites }>((state, { payload }) => {
      const index = state.favoritesMovies.findIndex((m) => m.id === payload.favorite.id);
      if (index === -1) {
        state.favoritesMovies.push(payload.favorite);
      } else {
        state.favoritesMovies.splice(index, 1);
      }
    }),
  }),
});

export const { selectFavoritesMovies, selectIsFavorite } = favoritesSlice.selectors;
export const { toggleFavoritesMovie } = favoritesSlice.actions;
