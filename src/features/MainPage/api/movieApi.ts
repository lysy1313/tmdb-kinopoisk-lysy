import { baseApi } from '@/app/api/baseApi';
import type { MovieCredits, MovieDetails, MovieResponse } from './movie.types';

export const movie = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<MovieResponse, { category?: string; page?: number }>({
      query: ({ category = 'popular', page = 1 }) => `movie/${category}?page=${page}`,
    }),
    getOneMovie: build.query<MovieDetails, string>({
      query: (movie_id) => `movie/${movie_id}`,
    }),
    getMovieSimilar: build.query<MovieResponse, string>({
      query: (movie_id) => `movie/${movie_id}/similar`,
    }),
    getOneMovieCredits: build.query<MovieCredits, string>({
      query: (movie_id) => `movie/${movie_id}/credits`,
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
