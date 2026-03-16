import type { Movie } from '@/features/MainPage/api/movie.types';
import styles from './MovieCart.module.scss';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { selectIsFavorite, toggleFavoritesMovie, type Favorites } from '@/features/FavoritesPage/model/favoritesSlice';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';

type Props = {
  movie: Movie | Favorites;
  size?: 'mini' | 'medium' | 'large';
};
export const MovieCart = ({ movie, size = 'medium' }: Props) => {
  const isFavorites = useAppSelector((state) => selectIsFavorite(state, movie.id));

  const dispatch = useAppDispatch();

  const toggleFavoriteMovieHandler = () => {
    const favorite: Favorites = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    };
    dispatch(toggleFavoritesMovie({ favorite }));
  };

  const rating =
    movie.vote_average <= 5 ? styles.red : movie.vote_average > 5 && movie.vote_average < 8 ? styles.orange : '';

  const sizeCart = size === 'large' ? styles.largeCart : size === 'mini' ? styles.miniCart : '';

  return (
    <div>
      <div key={movie.id} className={`${styles.cart} ${sizeCart}`}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : 'https://placehold.co/500/555/01b4e4?font=montserrat&text=No+poster'
          }
          alt="Movie"
          loading="lazy"
        />
        <button
          className={`${styles.btnFavorites} ${isFavorites ? styles.isFav : ''}`}
          onClick={toggleFavoriteMovieHandler}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <span className={`${styles.rating} ${rating}`}>{movie.vote_average.toFixed(1)}</span>
      </div>

      <div className={styles.titleCart}>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};
