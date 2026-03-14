import type { Movie } from "@/features/MainPage/api/movie.types";
import styles from "./MovieCart.module.scss";

type Props = {
  movie: Movie;
};
export const MovieCart = ({ movie }: Props) => {
  const rating =
    movie.vote_average <= 5
      ? styles.red
      : movie.vote_average > 5 && movie.vote_average < 8
        ? styles.orange
        : "";

  return (
    <div>
      <div key={movie.id} className={styles.cart}>
        <img
          src={
            movie.poster_path
              ? `http://image.tmdb.org/t/p/w185${movie.poster_path}`
              : "https://placehold.co/800/EEE/01b4e4?font=montserrat&text=No+image"
          }
          alt="Movie"
          loading="lazy"
        />
        <button className={styles.btnFavorites}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <span className={`${styles.rating} ${rating}`}>
          {movie.vote_average.toFixed(1)}
        </span>
      </div>

      <div className={styles.titleCart}>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};
