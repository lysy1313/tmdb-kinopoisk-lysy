import { Container } from '@/common/components/Container/Container';
import { Search } from '@/common/components/Search/Search';
import { useSearchParams } from 'react-router';
import { useLazyGetSearchMoviesQuery } from '../api/searchMoviesApi';
import { useEffect, useState } from 'react';
import { GridWrapper } from '@/common/components/MoviesWrapper/GridWrapper/GridWrapper';
import { MovieCart } from '@/common/components/MovieCart/MovieCart';
import styles from './SearchPage.module.scss';
import { Title } from '@/common/components/Title/Title';
import { Pagination } from '@/common/components/Pagination/Pagination';
import { MovieCartSkeleton } from '@/common/components/MovieCartSkeleton/MovieCartSkeleton';

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [getSearchMovies, { data, isLoading }] = useLazyGetSearchMoviesQuery();

  const searchResult = searchParams.get('query');

  useEffect(() => {
    if (searchResult) {
      getSearchMovies({ query: searchResult, page });
    }
  }, [searchResult, getSearchMovies, page]);

  const movies =
    data?.results.length !== 0 ? (
      <>
        <GridWrapper>
          {data?.results.map((movie) => (
            <MovieCart key={movie.id} movie={movie} size="large" />
          ))}
        </GridWrapper>
        {data?.total_pages && <Pagination currentPage={page} setCurrentPage={setPage} pagesCount={data?.total_pages} />}
      </>
    ) : (
      <p className={styles.info}>No matches found for "{searchResult}"</p>
    );

  return (
    <section>
      <Container>
        <div className={styles.searchWrapper}>
          <Title>Search results</Title>
          <Search
            key={searchResult || 'empty'}
            querySearch={searchResult}
            setSearchParams={setSearchParams}
            setPage={setPage}
          />
          {searchResult ? (
            <div>
              <p>Results for "{searchResult}"</p>
              {isLoading ? (
                <>
                  <GridWrapper>
                    {Array(20)
                      .fill(null)
                      .map((_, index) => (
                        <MovieCartSkeleton key={index} size="large" />
                      ))}
                  </GridWrapper>
                </>
              ) : (
                movies
              )}
            </div>
          ) : (
            <p className={styles.info}>Enter a movie title to start searching.</p>
          )}
        </div>
      </Container>
    </section>
  );
};
