import { baseApi } from '@/app/api/baseApi';
import type { MovieResponse } from '@/features/MainPage/api/movie.types';

export const searchMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSearchMovies: build.query<MovieResponse, { query: string; page?: number }>({
      query: ({ query, page = 1 }) => `search/movie?query=${query}&page=${page}`,
    }),
  }),
});

export const { useLazyGetSearchMoviesQuery } = searchMoviesApi;
