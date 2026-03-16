/* eslint-disable react-refresh/only-export-components */
import { FavoritesPage } from '@/features/FavoritesPage/ui/FavoritesPage';
import { FilteredMoviesPage } from '@/features/FilteredMoviesPage/ui/FilteredMoviesPage';
import { MainPage } from '@/features/MainPage/ui/MainPage';
import { MoviesCategoryPage } from '@/features/MoviesCategoryPage/ui/MoviesCategoryPage';
import { SearchPage } from '@/features/SearchPage/ui/SearchPage';
import { Route, Routes } from 'react-router';

export const Path = {
  Main: '/',
  CategoryMovies: '/movies/:category',
  FilteredMovies: 'filtered_movies',
  Search: 'search',
  Favorites: 'favorites',
} as const;

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.CategoryMovies} element={<MoviesCategoryPage />} />
    <Route path={Path.FilteredMovies} element={<FilteredMoviesPage />} />
    <Route path={Path.Search} element={<SearchPage />} />
    <Route path={Path.Favorites} element={<FavoritesPage />} />
  </Routes>
);
