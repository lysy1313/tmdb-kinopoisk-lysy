import { Container } from '@/common/components/Container/Container';
import { useGetMoviesQuery } from '../../api/movieApi';
import styles from './MovieSection.module.scss';
import { Link } from 'react-router';
import { MovieCart } from './MovieCart/MovieCart';
import { Title } from '@/common/components/Title/Title';

type MovieSectionProps = {
  title: string;
  category: string;
};
export const MovieSection = ({ category, title }: MovieSectionProps) => {
  const { data } = useGetMoviesQuery({ category });
  return (
    <section>
      <Container>
        <div>
          <div className={styles.titleSection}>
            <Title>{title}</Title>
            <Link to={`/movies/${category}`} className={styles.link}>
              View more &rarr;
            </Link>
          </div>
          <div className={styles.cartWrapper}>
            {data?.results?.slice(0, 6).map((movie) => {
              return <MovieCart key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
