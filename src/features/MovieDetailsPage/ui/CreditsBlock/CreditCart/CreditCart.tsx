import type { CastMember } from '@/features/MainPage/api/movie.types';
import styles from './CreditCart.module.scss';

type Props = {
  credit: CastMember;
};
export const CreditCart = ({ credit }: Props) => {
  const profileUrl = credit.profile_path
    ? `https://image.tmdb.org/t/p/w185${credit.profile_path}`
    : 'https://placehold.co/185/364f6b/ffffff?font=montserrat&text=No+Photo';

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={profileUrl} alt={credit.name} loading="lazy" />
      </div>
      <div className={styles.info}>
        <h4 className={styles.name}>{credit.name}</h4>
        <p className={styles.character}>{credit.character}</p>
      </div>
    </div>
  );
};
