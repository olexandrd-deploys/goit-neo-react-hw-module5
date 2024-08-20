import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { getTrendingMovies } from "../../helpers/api";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import LoadError from "../../components/LoadError/LoadError";

const HomePage = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const movies = await getTrendingMovies();
        setTrendingMoviesList(movies);
      } catch (error) {
        setError(error);
        return [];
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.homePage}>
      <h1>Trending Today</h1>
      {isLoading && <Loader />}
      {error && <LoadError />}
      <MoviesList list={trendingMoviesList} />
    </div>
  );
};

export default HomePage;
