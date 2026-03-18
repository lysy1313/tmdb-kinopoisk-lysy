import { MOVIE_SORT_OPTIONS } from '@/common/constants/constants';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { type ChangeEvent } from 'react';
import { selectSortBy, setSortBy } from '../../model/filteredMoviesSlice';
import styles from './SortControl.module.scss';
import type { MovieSortType } from '../../api/filteredMovies.types';

export const SortControl = () => {
  const sortBy = useAppSelector(selectSortBy);

  const dispatch = useAppDispatch();

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.currentTarget.value as MovieSortType));
  };

  return (
    <div className={styles.selectContainer}>
      <h3>Sort by:</h3>
      <select id="sort" value={sortBy} onChange={onChangeSelect} className={styles.select}>
        {Object.entries(MOVIE_SORT_OPTIONS).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
