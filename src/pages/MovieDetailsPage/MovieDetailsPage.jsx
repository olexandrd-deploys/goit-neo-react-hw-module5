import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import { getMovieDetails } from "../../helpers/api";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Loader from "../../components/Loader/Loader";
import LoadError from "../../components/LoadError/LoadError";
import AdditionalDetails from "../../components/AdditionalDetails/AdditionalDetails";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const movie = await getMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={css.movieDetailsPage}>
      <Link to={backLinkHref}>Go back</Link>
      {isLoading && <Loader />}
      {error && <LoadError />}
      {movieDetails && (
        <div>
          <MovieDetails movie={movieDetails} />
          <hr />
          <AdditionalDetails />
          <hr />
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
