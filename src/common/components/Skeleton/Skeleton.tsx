import Skeleton, { type SkeletonProps, SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { selectThemeMode } from '@/app/model/appSlice';

export const MySkeleton = (props: SkeletonProps) => {
  const theme = useAppSelector(selectThemeMode);

  const isDark = theme === 'dark';
  const baseColor = isDark ? '#1a1a1a' : '#ebebeb';
  const highlightColor = isDark ? '#2a2a2a' : '#f5f5f5';

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <Skeleton {...props} />
    </SkeletonTheme>
  );
};
