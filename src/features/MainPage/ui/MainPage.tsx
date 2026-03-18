import { MovieLists } from '@/common/constants/constants';
import { Main } from './Main/Main';
import styles from './MainPage.module.scss';
import { MovieShowcase } from './MovieShowcase/MovieShowcase';

export const MainPage = () => {
  return (
    <>
      <Main />
      <div className={styles.contentWrapper}>
        {MovieLists.map((list) => (
          <MovieShowcase key={list.category} title={list.label} category={list.category} />
        ))}
      </div>
    </>
  );
};
