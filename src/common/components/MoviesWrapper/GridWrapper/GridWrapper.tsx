import type { ReactNode } from 'react';
import styles from './GridWrapper.module.scss';

type GridWrapperProps = {
  children: ReactNode;
  size?: 'mini' | 'large';
};
export const GridWrapper = ({ children, size = 'large' }: GridWrapperProps) => {
  return <div className={`${styles.moviesWrapper} ${size === 'mini' ? styles.miniMoviesWrapper : ''}`}>{children}</div>;
};
