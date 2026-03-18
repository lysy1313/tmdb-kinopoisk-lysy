import { selectStatus } from '@/app/model/appSlice';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { useNavigate, useParams } from 'react-router';
import { CreditsBlock } from './CreditsBlock/CreditsBlock';
import { InfoBlock } from './InfoBlock/InfoBlock';
import styles from './MovieDetailsPage.module.scss';
import { SimilarBlock } from './SimilarBlock/SimilarBlock';

export const MovieDetailsPage = () => {
  const { movie_id } = useParams<{ movie_id: string }>();
  const status = useAppSelector(selectStatus);
  const navigate = useNavigate();

  if (status === 'failed' || !movie_id) {
    return (
      <div className={styles.contentAll}>
        <div className={styles.errorWrapper}>
          <div className={styles.errorIcon}>🎬</div>
          <h2>Oops! Movie not found</h2>
          <p>
            We couldn't find the movie you're looking for. It might be unavailable in your region or the ID is
            incorrect.
          </p>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contentAll}>
      <InfoBlock movieId={movie_id} />
      <CreditsBlock movieId={movie_id} />
      <SimilarBlock movieId={movie_id} />
    </div>
  );
};
