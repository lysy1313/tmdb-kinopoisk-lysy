/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { useDebounceValue } from '@/common/hooks/useDebounceValue'; // твой хук
import {
  selectVoteAverageGte,
  selectVoteAverageLte,
  setVoteAverageGte,
  setVoteAverageLte,
} from '../../model/filteredMoviesSlice';
import styles from './RangeRating.module.scss';

export const RangeRating = () => {
  const dispatch = useAppDispatch();

  const reduxMin = useAppSelector(selectVoteAverageGte);
  const reduxMax = useAppSelector(selectVoteAverageLte);

  const [values, setValues] = useState({ min: reduxMin, max: reduxMax });

  const debouncedValues = useDebounceValue(values, 300);

  useEffect(() => {
    if (values.min !== reduxMin || values.max !== reduxMax) {
      setValues({ min: reduxMin, max: reduxMax });
    }
  }, [reduxMin, reduxMax]);

  useEffect(() => {
    dispatch(setVoteAverageGte(debouncedValues.min));
    dispatch(setVoteAverageLte(debouncedValues.max));
  }, [debouncedValues, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const val = Number(e.target.value);
    setValues((prev) => ({
      min: isMin ? Math.min(val, prev.max - 0.5) : prev.min,
      max: !isMin ? Math.max(val, prev.min + 0.5) : prev.max,
    }));
  };

  const minPos = (values.min / 10) * 100;
  const maxPos = (values.max / 10) * 100;

  return (
    <div className={styles.rangeContainer}>
      <h3>
        Rating: {values.min.toFixed(1)} — {values.max.toFixed(1)}
      </h3>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={values.min}
          onChange={(e) => handleChange(e, true)}
          className={styles.thumb}
          style={{ zIndex: values.min > 5 ? 5 : 4 }}
        />
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={values.max}
          onChange={(e) => handleChange(e, false)}
          className={styles.thumb}
          style={{ zIndex: 3 }}
        />
        <div className={styles.sliderTrack} />
        <div className={styles.activeRange} style={{ left: `${minPos}%`, width: `${maxPos - minPos}%` }} />
      </div>
    </div>
  );
};
