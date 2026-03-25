import { Container } from '@/common/components/Container/Container';
import { RangeRating } from './RangeRating/RangeRating';
import styles from './FilteredMoviesPage.module.scss';
import { Title } from '@/common/components/Title/Title';
import { SortControl } from './SortControl/SortControl';
import { GenresControl } from './GenresControl/GenresControl';
import { ResetButton } from './ResetButton/ResetButton';
import { FilteredMovies } from './FilteredMovies/FilteredMovies';
import { useState } from 'react';

export const FilteredMoviesPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  return (
    <section>
      <Container>
        <div className={styles.sectionWrapper}>
          <div className={styles.sidebar}>
            <button className={styles.filterToggleBtn} onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
              {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
            </button>

            <div className={`${styles.containerFiltered} ${isFiltersOpen ? styles.open : ''}`}>
              <Title>Filters / Sort</Title>
              <SortControl />
              <RangeRating />
              <GenresControl />
              <ResetButton />
            </div>
          </div>

          {/* Правая колонка с фильмами */}
          <div className={styles.moviesContent}>
            <FilteredMovies />
          </div>
        </div>
      </Container>
    </section>
  );
};
