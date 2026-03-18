import { Routing } from '@/common/routing/Routing';
import { Header } from '@/common/components/Header/Header';
import { Footer } from '@/common/components/Footer/Footer';
import styles from './App.module.scss';
import { useAppSelector } from '@/common/hooks/useAppSelector';
import { useEffect } from 'react';
import { selectThemeMode } from '../model/appSlice';
import { ToastContainer } from 'react-toastify';

function App() {
  const theme = useAppSelector(selectThemeMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
