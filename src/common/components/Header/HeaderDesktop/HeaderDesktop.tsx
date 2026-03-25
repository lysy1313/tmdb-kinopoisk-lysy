/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangerTheme } from '../ChangerTheme/ChangerTheme';
import { NavLinks } from '../NavLinks/NavLinks';
import styles from './HeaderDesktop.module.scss';

export const HeaderDesktop = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <NavLinks />
      </nav>
      <ChangerTheme />
    </>
  );
};
