import { ContentSection } from '@/common/components/ContentSection/ContentSection';
import { useGetOneMovieCreditsQuery } from '@/features/MainPage/api/movieApi';
import { CreditCart } from './CreditCart/CreditCart';

type CreditsBlockProps = {
  movieId: string;
};
export const CreditsBlock = ({ movieId }: CreditsBlockProps) => {
  const { data, isLoading } = useGetOneMovieCreditsQuery(movieId);
  return (
    <>
      <ContentSection
        title="Top Cast"
        items={data?.cast}
        loading={isLoading}
        renderItem={(actor) => <CreditCart credit={actor} />}
      />
    </>
  );
};
