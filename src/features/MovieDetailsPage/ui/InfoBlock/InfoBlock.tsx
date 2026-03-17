import { useGetOneMovieQuery } from '@/features/MainPage/api/movieApi';
import styles from './InfoBlock.module.scss';
import { Title } from '@/common/components/Title/Title';
import { formatRuntime } from '@/common/utils/formatTime';
import { useNavigate } from 'react-router';

type InfoBlockProps = {
  movieId: string;
};
export const InfoBlock = ({ movieId }: InfoBlockProps) => {
  const { data: movie } = useGetOneMovieQuery(movieId);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className={styles.content}>
      <div className={styles.imgContainer}>
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : 'https://placehold.co/500/555/01b4e4?text=No+poster'
          }
          alt={movie?.title || 'Movie poster'}
          loading="eager"
          decoding="async"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.headerInfo}>
          <Title>{movie?.title}</Title>
          <button onClick={handleGoBack}>Back</button>
        </div>
        <div className={styles.movieInfo}>
          <span>Release year: {movie?.release_date.slice(0, 4)}</span>
          <span>Runtime: {formatRuntime(movie?.runtime)}</span>
          <span className={styles.rating}>{movie?.vote_average.toFixed(1)}</span>
        </div>
        <div className={styles.overview}>
          <p>{movie?.overview}</p>
        </div>
        <div className={styles.genre}>
          <h3>Genre</h3>
          <ul>
            {movie?.genres?.map((gen) => (
              <li key={gen.id}>{gen.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
