/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { MovieLists } from '@/common/constants/constants';
import { useNavigate, useParams } from 'react-router';
import styles from './MoviesCategoryPage.module.scss';
import { Container } from '@/common/components/Container/Container';
import { useLazyGetMoviesQuery } from '../../MainPage/api/movieApi';
import { MovieCart } from '../../../common/components/MovieCart/MovieCart';
import { useEffect, useState } from 'react';
import { Pagination } from '@/common/components/Pagination/Pagination';
import { GridWrapper } from '@/common/components/MoviesWrapper/GridWrapper/GridWrapper';
import { Title } from '@/common/components/Title/Title';
import { MovieCartSkeleton } from '@/common/components/MovieCartSkeleton/MovieCartSkeleton';

type CategoryType = 'popular' | 'top_rated' | 'upcoming' | 'now_playing';

export const MoviesCategoryPage = () => {
  const params = useParams<{ category: CategoryType }>();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [getMoviesByCategory, { data, isLoading }] = useLazyGetMoviesQuery();

  const category = MovieLists.find((el) => el.category === params.category);

  useEffect(() => {
    if (category && params.category) {
      getMoviesByCategory({
        category: params.category,
        page,
      });
    }
  }, [params.category, page, getMoviesByCategory, category]);

  const paramsChangeHandler = (category: CategoryType) => {
    setPage(1);
    navigate(`/movies/${category}`);
  };

  return (
    <section>
      <Container>
        <div className={styles.groupBtn}>
          {MovieLists.map((list) => (
            <button
              key={list.category}
              className={list.category === category?.category ? styles.active : ''}
              onClick={() => paramsChangeHandler(list.category)}
            >
              {list.label}
            </button>
          ))}
        </div>
        {isLoading && (
          <>
            <Title>{category?.label}</Title>
            <GridWrapper>
              {Array(20)
                .fill(null)
                .map((_, index) => (
                  <MovieCartSkeleton key={index} size="large" />
                ))}
            </GridWrapper>
          </>
        )}
        {!category && isLoading === false ? (
          <h3>Unknown category</h3>
        ) : (
          <>
            <Title>{category?.label}</Title>
            <GridWrapper>
              {data?.results.map((movie) => (
                <MovieCart key={movie.id} movie={movie} size="large" />
              ))}
            </GridWrapper>
          </>
        )}
        {data?.total_pages && isLoading === false && (
          <Pagination currentPage={page} setCurrentPage={setPage} pagesCount={data?.total_pages} />
        )}
      </Container>
    </section>
  );
};
