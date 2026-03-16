import { baseApi } from '@/app/api/baseApi';
import type { MovieResponse } from '@/features/MainPage/api/movie.types';
import type { GenresResponse, MovieSortType } from './filteredMovies.types';

export const filteredMoviesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFilteredMovies: build.query<
      MovieResponse,
      {
        page?: number;
        sortBy?: MovieSortType;
        voteAverageGte?: number;
        voteAverageLte?: number;
        withGenres?: string;
      }
    >({
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
    }),
    getGenresList: build.query<GenresResponse, void>({
      query: () => `/genre/movie/list`,
    }),
  }),
});

export const { useGetFilteredMoviesQuery, useGetGenresListQuery } = filteredMoviesApi;
