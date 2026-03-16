import { createAppSlice } from '@/common/utils/createAppSlice';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { MovieSortType } from '../api/filteredMovies.types';

type FiltersState = {
  page: number;
  sortBy: MovieSortType;
  voteAverageGte: number;
  voteAverageLte: number;
  withGenres: number[];
};

const initialState: FiltersState = {
  page: 1,
  sortBy: 'popularity.desc',
  voteAverageGte: 0,
  voteAverageLte: 10,
  withGenres: [],
};

export const filteredMoviesSlice = createAppSlice({
  name: 'filteredMovies',
  initialState,
  selectors: {
    selectFiltered: (state) => state,
    selectPage: (state) => state.page,
    selectSortBy: (state) => state.sortBy,
    selectVoteAverageGte: (state) => state.voteAverageGte,
    selectVoteAverageLte: (state) => state.voteAverageLte,
    selectWithGenres: (state) => state.withGenres,
  },
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSortBy: (state, action: PayloadAction<MovieSortType>) => {
      state.sortBy = action.payload;
      state.page = 1;
    },
    setVoteAverageGte: (state, action: PayloadAction<number>) => {
      state.voteAverageGte = action.payload;
      state.page = 1;
    },
    setVoteAverageLte: (state, action: PayloadAction<number>) => {
      state.voteAverageLte = action.payload;
      state.page = 1;
    },
    toggleGenres: (state, action: PayloadAction<number>) => {
      const index = state.withGenres.indexOf(action.payload);
      if (index === -1) {
        state.withGenres.push(action.payload);
      } else {
        state.withGenres.splice(index, 1);
      }
      state.page = 1;
    },
    resetFilters: () => initialState,
  },
});

export const { resetFilters, toggleGenres, setPage, setSortBy, setVoteAverageGte, setVoteAverageLte } =
  filteredMoviesSlice.actions;
export const {
  selectFiltered,
  selectPage,
  selectSortBy,
  selectVoteAverageGte,
  selectVoteAverageLte,
  selectWithGenres,
} = filteredMoviesSlice.selectors;
