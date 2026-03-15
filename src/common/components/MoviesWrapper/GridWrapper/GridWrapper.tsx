import type { ReactNode } from 'react';
import styles from './GridWrapper.module.scss';

type GridWrapperProps = {
  children: ReactNode;
};
export const GridWrapper = ({ children }: GridWrapperProps) => {
  return <div className={styles.moviesWrapper}>{children}</div>;
};
