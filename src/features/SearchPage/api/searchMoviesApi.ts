import { baseApi } from '@/app/api/baseApi';
import { zodValidation } from '@/common/utils/zodValidation';
import type { MovieResponse } from '@/features/MainPage/api/movie.types';
import { MovieResponseSchema } from '@/features/MainPage/lib/schemas/moviesSchema';

export const searchMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSearchMovies: build.query<MovieResponse, { query: string; page?: number }>({
      query: ({ query, page = 1 }) => `search/movie?query=${query}&page=${page}`,
      transformResponse: (result: MovieResponse) => zodValidation(result, MovieResponseSchema),
    }),
  }),
});

export const { useLazyGetSearchMoviesQuery } = searchMoviesApi;
