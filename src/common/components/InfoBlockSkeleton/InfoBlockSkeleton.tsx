import { MySkeleton } from '../Skeleton/Skeleton';
import styles from '@/features/MovieDetailsPage/ui/InfoBlock/InfoBlock.module.scss';

export const InfoBlockSkeleton = () => {
  return (
    <section className={styles.content}>
      <div className={styles.imgContainer}>
        <MySkeleton height="100%" borderRadius="20px" containerClassName={styles.skeletonFlex} />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.headerInfo}>
          <div style={{ width: '60%' }}>
            <MySkeleton height={40} />
          </div>
          <MySkeleton width={80} height={35} borderRadius="8px" />
        </div>

        <div className={styles.movieInfo}>
          <MySkeleton width={120} height={20} />
          <MySkeleton width={100} height={20} />
          <MySkeleton width={40} height={25} borderRadius="4px" />
        </div>

        <div className={styles.overview}>
          <MySkeleton count={4} style={{ marginBottom: '8px' }} />
        </div>

        <div className={styles.genre}>
          <MySkeleton width={100} height={24} style={{ marginBottom: '12px' }} />
          <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: 0 }}>
            <li>
              <MySkeleton width={70} height={20} borderRadius="20px" />
            </li>
            <li>
              <MySkeleton width={90} height={20} borderRadius="20px" />
            </li>
            <li>
              <MySkeleton width={60} height={20} borderRadius="20px" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
