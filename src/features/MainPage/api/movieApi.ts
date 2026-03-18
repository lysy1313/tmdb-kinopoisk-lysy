import { baseApi } from '@/app/api/baseApi';
import type { MovieCredits, MovieDetails, MovieResponse } from './movie.types';
import { zodValidation } from '@/common/utils/zodValidation';
import { MovieResponseSchema } from '../lib/schemas/moviesSchema';
import { MovieDetailsSchema } from '../lib/schemas/movieDetailsSchema';
import { MovieCreditsSchema } from '../lib/schemas/movieCreditsSchema';

export const movie = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<MovieResponse, { category?: string; page?: number }>({
      query: ({ category = 'popular', page = 1 }) => `movie/${category}?page=${page}`,
      transformResponse: (result: MovieResponse) => zodValidation(result, MovieResponseSchema),
    }),
    getOneMovie: build.query<MovieDetails, string>({
      query: (movie_id) => `movie/${movie_id}`,
      transformResponse: (result: MovieDetails) => zodValidation(result, MovieDetailsSchema),
    }),
    getMovieSimilar: build.query<MovieResponse, string>({
      query: (movie_id) => `movie/${movie_id}/similar`,
      transformResponse: (result: MovieResponse) => zodValidation(result, MovieResponseSchema),
    }),
    getOneMovieCredits: build.query<MovieCredits, string>({
      query: (movie_id) => `movie/${movie_id}/credits`,
      transformResponse: (result: MovieCredits) => zodValidation(result, MovieCreditsSchema),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useLazyGetMoviesQuery,
  useGetOneMovieQuery,
  useGetOneMovieCreditsQuery,
  useGetMovieSimilarQuery,
} = movie;
