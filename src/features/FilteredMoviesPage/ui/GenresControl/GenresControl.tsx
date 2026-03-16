import { useAppSelector } from '@/common/hooks/useAppSelector';
import { useGetGenresListQuery } from '../../api/filteredMoviesApi';
import styles from './GenresControl.module.scss';
import { selectWithGenres, toggleGenres } from '../../model/filteredMoviesSlice';
import { useAppDispatch } from '@/common/hooks/useAppDispatch';

export const GenresControl = () => {
  const { data } = useGetGenresListQuery();

  const genres = useAppSelector(selectWithGenres);

  const dispatch = useAppDispatch();

  const toggleGenreHandler = (id: number) => {
    dispatch(toggleGenres(id));
  };

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
