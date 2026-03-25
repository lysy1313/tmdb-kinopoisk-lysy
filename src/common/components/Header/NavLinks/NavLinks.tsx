import { Path } from '@/common/routing/Routing';
import { NavLink, useLocation } from 'react-router';
import styles from './NavLinks.module.scss';

export const NavLinks = () => {
  const location = useLocation();
  return (
    <>
      <NavLink to={Path.Main} className={({ isActive }) => (isActive ? styles.active : '')}>
        Main
      </NavLink>
      <NavLink to={'/movies/popular'} className={() => (location.pathname.startsWith('/movies/') ? styles.active : '')}>
        Category Movies
      </NavLink>
      <NavLink to={Path.FilteredMovies} className={({ isActive }) => (isActive ? styles.active : '')}>
        Filtered Movies
      </NavLink>
      <NavLink to={Path.Search} className={({ isActive }) => (isActive ? styles.active : '')}>
        Search
      </NavLink>
      <NavLink to={Path.Favorites} className={({ isActive }) => (isActive ? styles.active : '')}>
        Favorites
      </NavLink>
    </>
  );
};
