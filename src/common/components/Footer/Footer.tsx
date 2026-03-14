import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <small>
          &copy; 2026 Kinopoisk Demo &middot; Data courtesy of TMDB.
        </small>
      </p>
    </footer>
  );
};
