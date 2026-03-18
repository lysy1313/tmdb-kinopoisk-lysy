import * as z from 'zod';
import { MovieSchema } from './moviesSchema';
import { GenreSchema } from '@/features/FilteredMoviesPage/lib/schemas/filteredMoviesSchema';

export const ProductionCountrySchema = z.object({
  iso_3166_1: z.string().length(2),
  name: z.string().min(1),
});

export const SpokenLanguageSchema = z.object({
  english_name: z.string().min(1),
  iso_639_1: z.string().length(2),
  name: z.string().min(1),
});

const MovieWithoutGenreIdsSchema = MovieSchema.omit({ genre_ids: true });

export const ProductionCompanySchema = z.object({
  id: z.number().int().positive(),
  logo_path: z.string().nullable(),
  name: z.string().min(1),
  origin_country: z.string(),
});

export const CollectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
});

export const MovieDetailsSchema = MovieWithoutGenreIdsSchema.extend({
  belongs_to_collection: CollectionSchema.nullable(),
  budget: z.number().int().nonnegative(),
  genres: z.array(GenreSchema),
  homepage: z.string().nullable(),
  imdb_id: z.string().nullable().optional(),
  production_companies: z.array(ProductionCompanySchema),
  production_countries: z.array(ProductionCountrySchema),
  revenue: z.number().int().nonnegative(),
  runtime: z.number().int().nonnegative().nullable(),
  spoken_languages: z.array(SpokenLanguageSchema),
  status: z.string(),
  tagline: z.string().nullable(),
});
