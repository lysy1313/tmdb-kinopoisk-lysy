import { useNavigate } from 'react-router';
import { Container } from '../Container/Container';
import { Title } from '@/common/components/Title/Title';
import { Path } from '@/common/routing/Routing';
import { Link } from 'react-router';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <section className={styles.notFound}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.errorCode}>404</div>

          <Title>Oops! Page not found</Title>

          <p className={styles.description}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className={styles.actions}>
            <button onClick={handleGoBack} className={styles.btnSecondary}>
              ← Go Back
            </button>

            <Link to={Path.Main} className={styles.btnPrimary}>
              Home Page
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
