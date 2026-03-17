/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@/common/components/Container/Container';
import { Title } from '@/common/components/Title/Title';
import { Link } from 'react-router';
import styles from './ContentSection.module.scss';

type MovieSectionProps<T> = {
  title: string;
  items: T[] | undefined;
  renderItem: (item: T) => React.ReactNode;
  category?: string;
  loading?: boolean;
};

export const ContentSection = <T,>({ category, title, items, renderItem, loading }: MovieSectionProps<T>) => {
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
          {loading ? (
            <p>Loading...</p>
          ) : (
            items?.slice(0, 6).map((item, index) => <div key={(item as any).id || index}>{renderItem(item)}</div>)
          )}
        </div>
      </Container>
    </section>
  );
};
