import { Path } from '@/common/routing/Routing';
import { memo, useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { useNavigate, type SetURLSearchParams } from 'react-router';
import styles from './Search.module.scss';

type SearchPropsType = {
  page?: 'main' | 'search';
  querySearch?: string | undefined | null;
  setSearchParams?: SetURLSearchParams;
};

export const Search = memo(({ page = 'search', querySearch, setSearchParams }: SearchPropsType) => {
  const [searchText, setSearchText] = useState<string>(querySearch || '');
  const navigate = useNavigate();

  const changeSearchTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setSearchText(text);
    if (text.trim() === '' && page === 'search' && setSearchParams) {
      setSearchParams({}, { replace: true });
    }
  };

  const searchHandler = () => {
    const trimmedText = searchText.trim();

    if (!trimmedText) return;
    if (page === 'main') {
      navigate(`${Path.Search}?query=${encodeURIComponent(trimmedText)}`);
    } else if (page === 'search') {
      if (searchText && setSearchParams) {
        setSearchParams({ query: trimmedText });
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search movie"
        value={searchText}
        onChange={changeSearchTextHandler}
        onKeyDown={handleKeyDown}
      />
      <button onClick={searchHandler} disabled={searchText.trim() === ''}>
        Search
      </button>
    </div>
  );
});
