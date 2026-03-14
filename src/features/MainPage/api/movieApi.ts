import { baseApi } from "@/app/api/baseApi";
import type { MovieResponse } from "./movie.types";

export const movie = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query<MovieResponse, string>({
      query: (category) => `movie/${category}`,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = movie;
