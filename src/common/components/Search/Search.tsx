import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={styles.search}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search movie"
      />
      <button>Search</button>
    </div>
  );
};
