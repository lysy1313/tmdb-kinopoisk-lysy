/* eslint-disable react-refresh/only-export-components */
import { MainPage } from "@/features/MainPage/ui/MainPage";
import { MoviesCategoryPage } from "@/features/MoviesCategoryPage/MoviesCategoryPage";
import { Route, Routes } from "react-router";

export const Path = {
  Main: "/",
  CategoryMovies: "/movies/:category",
  FilteredMovies: "filtered_movies",
  Search: "search",
  Favorites: "favorites",
} as const;

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.CategoryMovies} element={<MoviesCategoryPage />} />
  </Routes>
);
