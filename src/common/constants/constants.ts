export const MovieLists = [
  { category: 'popular', label: 'Popular' },
  { category: 'top_rated', label: 'Top Rated' },
  { category: 'upcoming', label: 'Upcoming' },
  { category: 'now_playing', label: 'Now Playing' },
] as const;

export const FAVORITES_LS = 'favorites';
export const THEME_MODE_LS = 'theme-mode';

export const MOVIE_SORT_OPTIONS = {
  'popularity.asc': 'Popular ▲',
  'popularity.desc': 'Popular ▼',
  'primary_release_date.asc': 'Release Date ▲',
  'primary_release_date.desc': 'Release Date ▼',
  'vote_average.asc': 'Rating ▲',
  'vote_average.desc': 'Rating ▼',
  'title.asc': 'Title (A-Z)',
  'title.desc': 'Title (Z-A)',
} as const;
