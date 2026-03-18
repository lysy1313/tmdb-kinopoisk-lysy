import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { resetFilters } from '../../model/filteredMoviesSlice';
import styles from './ResetButton.module.scss';

export const ResetButton = () => {
  const dispatch = useAppDispatch();

  const resetFiltersHandler = () => {
    dispatch(resetFilters());
  };
  return (
    <button className={styles.btnReset} onClick={resetFiltersHandler}>
      Reset filters
    </button>
  );
};
