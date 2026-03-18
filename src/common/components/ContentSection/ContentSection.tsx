/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@/common/components/Container/Container';
import { Title } from '@/common/components/Title/Title';
import { Link } from 'react-router';
import styles from './ContentSection.module.scss';
import { MovieCartSkeleton } from '../MovieCartSkeleton/MovieCartSkeleton';

type MovieSectionProps<T> = {
  title: string;
  items: T[] | undefined;
  renderItem: (item: T) => React.ReactNode;
  category?: string;
  loading?: boolean;
};

export const ContentSection = <T,>({ category, title, items, renderItem, loading }: MovieSectionProps<T>) => {
  if (loading === false && (!items || items.length === 0)) {
    return (
      <section>
        <Container>
          <div className={styles.titleSection}>
            <Title>{title}</Title>
          </div>

          <div className={styles.emptyWrapper}>
            <h3 className={styles.title}>No "{title}" available</h3>
            <p className={styles.description}>Try searching for something else or check back later.</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <Container>
        <div className={styles.titleSection}>
          <Title>{title}</Title>
          {category && (
            <Link to={`/movies/${category}`} className={styles.link}>
              View more &rarr;
            </Link>
          )}
        </div>

        <div className={styles.cartWrapper}>
          {loading
            ? Array(6)
                .fill(null)
                .map((_, index) => <MovieCartSkeleton key={index} />)
            : items?.slice(0, 6).map((item, index) => <div key={(item as any).id || index}>{renderItem(item)}</div>)}
        </div>
      </Container>
    </section>
  );
};
