import { Path } from '@/common/routing/Routing';
import { NavLink, useLocation, type NavLinkRenderProps } from 'react-router';
import styles from './NavLinks.module.scss';

export const NavLinks = () => {
  const location = useLocation();

  const getNavLinkClass = ({ isActive }: NavLinkRenderProps) =>
    isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink;

  const getLinkClass = (isActive: boolean) => (isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink);

  return (
    <>
      <NavLink to={Path.Main} className={getNavLinkClass}>
        Main
      </NavLink>
      <NavLink to={'/movies/popular'} className={getLinkClass(location.pathname.startsWith('/movies/'))}>
        Category Movies
      </NavLink>
      <NavLink to={Path.FilteredMovies} className={getNavLinkClass}>
        Filtered Movies
      </NavLink>
      <NavLink to={Path.Search} className={getNavLinkClass}>
        Search
      </NavLink>
      <NavLink to={Path.Favorites} className={getNavLinkClass}>
        Favorites
      </NavLink>
    </>
  );
};
