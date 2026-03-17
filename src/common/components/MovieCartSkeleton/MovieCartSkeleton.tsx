import { MySkeleton } from '@/common/components/Skeleton/Skeleton';
import styles from '../MovieCart/MovieCart.module.scss';

export const MovieCartSkeleton = ({ size = 'medium' }: { size?: 'mini' | 'medium' | 'large' }) => {
  const sizeClasses = {
    large: styles.largeCart,
    mini: styles.miniCart,
    medium: '',
  };
  return (
    <div>
      <div className={`${styles.cart} ${sizeClasses[size]}`} style={{ border: 'none', backgroundColor: 'transparent' }}>
        <MySkeleton height="100%" borderRadius="5px" />
      </div>

      <div className={styles.titleCart} style={{ marginTop: '12px', padding: '0 10px' }}>
        <MySkeleton width="90%" height={20} />
        <MySkeleton width="40%" height={15} style={{ marginTop: '8px' }} />
      </div>
    </div>
  );
};
