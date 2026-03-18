import type { MOVIE_SORT_OPTIONS } from '@/common/constants/constants';

export type Genre = {
  id: number;
  name: string;
};

export type GenresResponse = {
  genres: Genre[];
};

export type MovieSortType = keyof typeof MOVIE_SORT_OPTIONS;

export type ParamsFilteredRequest = {
  page?: number;
  sortBy?: MovieSortType;
  voteAverageGte?: number;
  voteAverageLte?: number;
  withGenres?: string | undefined;
};
