import { MovieCart } from '@/common/components/MovieCart/MovieCart';
import { useGetMoviesQuery } from '../../api/movieApi';
import { ContentSection } from '@/common/components/ContentSection/ContentSection';
type MovieShowcaseProps = {
  title: string;
  category?: string;
};
export const MovieShowcase = ({ category, title }: MovieShowcaseProps) => {
  const { data, isLoading } = useGetMoviesQuery({ category });

  return (
    <>
      <ContentSection
        key={category}
        category={category}
        title={title}
        loading={isLoading}
        items={data?.results}
        renderItem={(movie) => <MovieCart movie={movie} />}
      />
    </>
  );
};
