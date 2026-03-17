import { useAppSelector } from '@/common/hooks/useAppSelector';
import { useGetGenresListQuery } from '../../api/filteredMoviesApi';
import styles from './GenresControl.module.scss';
import { selectWithGenres, toggleGenres } from '../../model/filteredMoviesSlice';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';
import { MySkeleton } from '@/common/components/Skeleton/Skeleton';

export const GenresControl = () => {
  const { data, isLoading } = useGetGenresListQuery();

  const genres = useAppSelector(selectWithGenres);

  const dispatch = useAppDispatch();

  const toggleGenreHandler = (id: number) => {
    dispatch(toggleGenres(id));
  };

  if (isLoading) {
    return (
      <div className={styles.genreContainer}>
        {Array(19)
          .fill(null)
          .map((_, index) => (
            <MySkeleton key={index} width={110} height={27} />
          ))}
      </div>
    );
  }

  return (
    <div className={styles.genreContainer}>
      {data?.genres.map((genre) => (
        <button
          key={genre.id}
          className={genres.includes(genre.id) ? styles.active : ''}
          onClick={() => toggleGenreHandler(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};
