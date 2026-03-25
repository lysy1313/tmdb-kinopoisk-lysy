/* eslint-disable @typescript-eslint/no-unused-vars */
import { Footer } from '@/common/components/Footer/Footer';
import { Header } from '@/common/components/Header/Header';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { Routing } from '@/common/routing/Routing';
import { StubPage } from '@/features/StubPage/StubPage';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { selectThemeMode } from '../model/appSlice';
import styles from './App.module.scss';

function App() {
  const theme = useAppSelector(selectThemeMode);
  const [regionStatus, setRegionStatus] = useState<'loading' | 'blocked' | 'allowed'>('loading');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const checkRegion = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        if (['RU', 'BY'].includes(data.country_code)) {
          setRegionStatus('blocked');
        } else {
          setRegionStatus('allowed');
        }
      } catch (e) {
        setRegionStatus('allowed');
      }
    };
    checkRegion();
  }, []);

  if (regionStatus === 'loading') {
    return <div className={styles.loading}>Checking connection...</div>;
  }

  if (regionStatus === 'blocked') {
    return (
      <div className={styles.app}>
        <StubPage />
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routing />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
