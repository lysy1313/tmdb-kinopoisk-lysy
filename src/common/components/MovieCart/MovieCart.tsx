import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { selectIsFavorite, toggleFavoritesMovie, type Favorites } from '@/features/FavoritesPage/model/favoritesSlice';
import type { Movie } from '@/features/MainPage/api/movie.types';
import type { MouseEvent } from 'react';
import { Link } from 'react-router';
import styles from './MovieCart.module.scss';

type Props = {
  movie: Movie | Favorites;
  size?: 'mini' | 'medium' | 'large';
};
export const MovieCart = ({ movie, size = 'medium' }: Props) => {
  const isFavorites = useAppSelector((state) => selectIsFavorite(state, movie.id));
  const dispatch = useAppDispatch();

  const getRatingClass = (vote: number) => {
    if (vote <= 5) return styles.red;
    if (vote < 8) return styles.orange;
    return '';
  };

  const sizeClasses = {
    large: styles.largeCart,
    mini: styles.miniCart,
    medium: '',
  };

  const toggleFavoriteMovieHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const favorite: Favorites = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    };

    dispatch(toggleFavoritesMovie({ favorite }));
  };

  return (
    <Link to={`/movie/${movie.id}`} className={styles.linkCart}>
      <div className={`${styles.cart} ${sizeClasses[size]}`}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : 'https://placehold.co/500/555/01b4e4?text=No+poster'
          }
          alt={movie.title}
          loading="lazy"
        />

        <button
          type="button"
          className={`${styles.btnFavorites} ${isFavorites ? styles.isFav : ''}`}
          onClick={toggleFavoriteMovieHandler}
          aria-label="Toggle Favorite"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <span className={`${styles.rating} ${getRatingClass(movie.vote_average)}`}>
          {movie.vote_average.toFixed(1)}
        </span>
      </div>

      <div className={styles.titleCart}>
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
};
