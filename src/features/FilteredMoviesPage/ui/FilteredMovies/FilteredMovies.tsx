import { GridWrapper } from '@/common/components/MoviesWrapper/GridWrapper/GridWrapper';
import { MovieCart } from '@/common/components/MovieCart/MovieCart';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { selectFiltered, selectPage, setPage } from '../../model/filteredMoviesSlice';
import { useGetFilteredMoviesQuery } from '../../api/filteredMoviesApi';
import { Pagination } from '@/common/components/Pagination/Pagination';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import styles from './FilteredMovies.module.scss';

export const FilteredMovies = () => {
  const filtered = useAppSelector(selectFiltered);
  const currentPage = useAppSelector(selectPage);

  const dispatch = useAppDispatch();

  let paramsQuery;
  if (filtered.withGenres.length !== 0) {
    paramsQuery = { ...filtered, withGenres: filtered.withGenres.join(',') };
  } else {
    paramsQuery = { ...filtered, withGenres: undefined };
  }

  const { data } = useGetFilteredMoviesQuery(paramsQuery);

  const setCurrentPage = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className={styles.container}>
      <GridWrapper size="mini">
        {data?.results.map((movie) => (
          <MovieCart key={movie.id} movie={movie} size="mini" />
        ))}
      </GridWrapper>
      {data?.total_pages && data?.total_pages > 1 && (
        <Pagination currentPage={currentPage} pagesCount={data?.total_pages} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};
