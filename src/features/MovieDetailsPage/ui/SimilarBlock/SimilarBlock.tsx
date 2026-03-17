import { ContentSection } from '@/common/components/ContentSection/ContentSection';
import { MovieCart } from '@/common/components/MovieCart/MovieCart';
import { useGetMovieSimilarQuery } from '@/features/MainPage/api/movieApi';

type SimilarBlockProps = {
  movieId: string;
};
export const SimilarBlock = ({ movieId }: SimilarBlockProps) => {
  const { data, isLoading } = useGetMovieSimilarQuery(movieId);

  return (
    <>
      <ContentSection
        title="Recommended for you"
        items={data?.results}
        loading={isLoading}
        renderItem={(movie) => <MovieCart movie={movie} />}
      />
    </>
  );
};
