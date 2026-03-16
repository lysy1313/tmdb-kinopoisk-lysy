import { Container } from '@/common/components/Container/Container';
import { RangeRating } from './RangeRating/RangeRating';
import styles from './FilteredMoviesPage.module.scss';
import { Title } from '@/common/components/Title/Title';
import { SortControl } from './SortControl/SortControl';
import { GenresControl } from './GenresControl/GenresControl';
import { ResetButton } from './ResetButton/ResetButton';
import { FilteredMovies } from './FilteredMovies/FilteredMovies';

export const FilteredMoviesPage = () => {
  return (
    <section>
      <Container>
        <div className={styles.sectionWrapper}>
          <div className={styles.containerFiltered}>
            <Title>Filters / Sort</Title>
            <SortControl />
            <RangeRating />
            <GenresControl />
            <ResetButton />
          </div>
          <FilteredMovies />
        </div>
      </Container>
    </section>
  );
};
