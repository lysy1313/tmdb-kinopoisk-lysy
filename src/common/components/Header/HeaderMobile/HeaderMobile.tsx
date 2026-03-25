import { useEffect, useState } from 'react';
import { ChangerTheme } from '../ChangerTheme/ChangerTheme';
import { NavLinks } from '../NavLinks/NavLinks';
import styles from './HeaderMobile.module.scss';
import { useLocation } from 'react-router';

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <div className={styles.mobileWrapper}>
      <button className={styles.burger} onClick={() => setIsOpen(true)}>
        Menu
      </button>

      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={() => setIsOpen(false)}>
        <div
          className={`${styles.mobileContainer} ${isOpen ? styles.containerOpen : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            ✕
          </button>

          <nav className={styles.mobileNav}>
            <NavLinks />
          </nav>

          <div className={styles.themeWrapper}>
            <ChangerTheme />
          </div>
        </div>
      </div>
    </div>
  );
};
