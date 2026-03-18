import { baseApi } from '@/app/api/baseApi';
import type { MovieResponse } from '@/features/MainPage/api/movie.types';
import type { GenresResponse, ParamsFilteredRequest } from './filteredMovies.types';
import { zodValidation } from '@/common/utils/zodValidation';
import { GenresResponseSchema } from '../lib/schemas/filteredMoviesSchema';
import { MovieResponseSchema } from '@/features/MainPage/lib/schemas/moviesSchema';

export const filteredMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFilteredMovies: build.query<MovieResponse, ParamsFilteredRequest>({
      query: ({ page = 1, sortBy, voteAverageGte, voteAverageLte, withGenres }) => ({
        url: 'discover/movie',
        params: {
          page,
          sort_by: sortBy,
          'vote_average.gte': voteAverageGte,
          'vote_average.lte': voteAverageLte,
          with_genres: withGenres,
        },
      }),
      transformResponse: (result: MovieResponse) => zodValidation(result, MovieResponseSchema),
    }),
    getGenresList: build.query<GenresResponse, void>({
      query: () => `/genre/movie/list`,
      transformResponse: (result: GenresResponse) => zodValidation(result, GenresResponseSchema),
    }),
  }),
});

export const { useGetFilteredMoviesQuery, useGetGenresListQuery } = filteredMoviesApi;
