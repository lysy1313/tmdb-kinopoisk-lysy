import { Container } from '@/common/components/Container/Container';
import { useParams } from 'react-router';
import { InfoBlock } from './InfoBlock/InfoBlock';
import { CreditsBlock } from './CreditsBlock/CreditsBlock';
import { SimilarBlock } from './SimilarBlock/SimilarBlock';
import styles from './MovieDetailsPage.module.scss';

export const MovieDetailsPage = () => {
  const { movie_id } = useParams<{ movie_id: string }>();
  return (
    <>
      <Container>
        {movie_id !== undefined ? (
          <div className={styles.contentAll}>
            <InfoBlock movieId={movie_id} />
            <CreditsBlock movieId={movie_id} />
            <SimilarBlock movieId={movie_id} />
          </div>
        ) : (
          <p>Movie not found.</p>
        )}
      </Container>
    </>
  );
};
