import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import styles from './ChangerTheme.module.scss';
import { toggleTheme } from '@/app/model/appSlice';
import type { MouseEvent } from 'react';
export const ChangerTheme = () => {
  const dispatch = useAppDispatch();

  const changeThemeHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleTheme());
  };
  return (
    <div className={styles.themeMode}>
      <button onClick={changeThemeHandler} />
    </div>
  );
};
