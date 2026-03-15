import { MovieLists } from '@/common/constants/constants';
import { Main } from './Main/Main';
import { MovieSection } from './MovieSection/MovieSection';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <>
      <Main />
      <div className={styles.contentWrapper}>
        {MovieLists.map((list) => (
          <MovieSection key={list.category} category={list.category} title={list.label} />
        ))}
      </div>
    </>
  );
};
