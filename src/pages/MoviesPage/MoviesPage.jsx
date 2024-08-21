import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import LoadError from "../../components/LoadError/LoadError";
import { searchMovies } from "../../helpers/api";
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();

  const query = params.get("query") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(false);
      try {
        if (!query) {
          return;
        }
        const movies = await searchMovies(query);
        setMovieList(movies);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;
    if (!searchQuery) {
      return setParams({});
    }
    params.set("query", searchQuery);
    setParams(params);
    e.target.reset();
  };

  return (
    <div className={css.moviePage}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" />
        <button type="submit">Search</button>
      </form>

      {query.length > 0 && <MoviesList list={movieList} />}
      {error && <LoadError />}
      {isLoading && <Loader />}
    </div>
  );
};

export default MoviesPage;
