import { Container } from '@/common/components/Container/Container';
import { Title } from '@/common/components/Title/Title';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { selectFavoritesMovies } from '../model/favoritesSlice';
import { MovieCart } from '@/common/components/MovieCart/MovieCart';
import styles from './FavoritesPage.module.scss';

export const FavoritesPage = () => {
  const favorites = useAppSelector(selectFavoritesMovies);

  return (
    <section>
      <Container>
        <div className={styles.titleWrapper}>
          <Title>Favorites</Title>
        </div>
        {favorites.length !== 0 ? (
          <div className={styles.cartWrapper}>
            {favorites.map((fav) => (
              <MovieCart key={fav.id} movie={fav} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyContainer}>
            <p className={styles.text}>
              Your favorites list is empty. Use the
              <span className={styles.iconWrapper}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
              button on any movie card to save it.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};
