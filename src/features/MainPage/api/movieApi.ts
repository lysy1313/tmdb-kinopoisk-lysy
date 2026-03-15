import { baseApi } from "@/app/api/baseApi";
import type { MovieResponse } from "./movie.types";

export const movie = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<MovieResponse, { category: string; page?: number }>({
      query: ({ category, page = 1 }) => `movie/${category}?page=${page}`,
    }),
  }),
});

export const { useGetMoviesQuery, useLazyGetMoviesQuery } = movie;
