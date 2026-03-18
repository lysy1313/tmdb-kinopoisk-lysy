/* eslint-disable react-hooks/purity */
import { Container } from "@/common/components/Container/Container";
import { useMemo } from "react";
import { useGetMoviesQuery } from "../../api/movieApi";
import styles from "./Main.module.scss";
import { Search } from "@/common/components/Search/Search";

export const Main = () => {
  const { data } = useGetMoviesQuery({ category: "popular" });

  const randomIndex = useMemo(() => Math.floor(Math.random() * 20), []);

  const heroMovie = data?.results?.[randomIndex];
  const backdropUrl = heroMovie
    ? `https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}`
    : "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop";

  return (
    <section
      className={styles.main}
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <Container>
        <div className={styles.heroTitle}>
          <h1>Welcome to TMDB</h1>
          <p>Browse highlighted titles from TMDB</p>
          <Search page="main" />
        </div>
      </Container>
    </section>
  );
};
