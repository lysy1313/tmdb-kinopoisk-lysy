import type { ReactNode } from 'react';
import styles from './Title.module.scss';

type Props = {
  children: ReactNode;
};
export const Title = ({ children }: Props) => {
  return <h2 className={styles.title}>{children}</h2>;
};
