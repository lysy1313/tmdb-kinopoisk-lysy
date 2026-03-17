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
        <div className={styles.cartWrapper}>
          {favorites.map((fav) => (
            <MovieCart key={fav.id} movie={fav} />
          ))}
        </div>
      </Container>
    </section>
  );
};
