/* eslint-disable react-refresh/only-export-components */
import { MainPage } from "@/features/MainPage/ui/MainPage";
import { Route, Routes } from "react-router";

export const Path = {
  Main: "/",
  CategoryMovies: "category_movies",
  FilteredMovies: "filtered_movies",
  Search: "search",
  Favorites: "favorites",
} as const;

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    {/* <Route path={Path.Login} element={<Login />} /> */}
  </Routes>
);
