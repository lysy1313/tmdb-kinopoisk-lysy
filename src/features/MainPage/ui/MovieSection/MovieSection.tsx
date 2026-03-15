import { Container } from "@/common/components/Container/Container";
import { useGetMoviesQuery } from "../../api/movieApi";
import styles from "./MovieSection.module.scss";
import { Link } from "react-router";
import { MovieCart } from "./MovieCart/MovieCart";

type MovieSectionProps = {
  title: string;
  category: string;
};
export const MovieSection = ({ category, title }: MovieSectionProps) => {
  const { data } = useGetMoviesQuery({ category });
  return (
    <section>
      <Container>
        <div>
          <div className={styles.titleSection}>
            <h2 className={styles.title}>{title}</h2>
            <Link to={`/movies/${category}`} className={styles.link}>
              View more &rarr;
            </Link>
          </div>
          <div className={styles.cartWrapper}>
            {data?.results?.slice(0, 6).map((movie) => {
              return <MovieCart key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
