import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import css from "./MovieDetailsPage.module.css";
import { getMovieDetails } from "../../helpers/api";
import Loader from "../../components/Loader/Loader";
import LoadError from "../../components/LoadError/LoadError";

const MovieDetails = lazy(() =>
  import("../../components/MovieDetails/MovieDetails")
);
const AdditionalDetailsLinks = lazy(() =>
  import("../../components/AdditionalDetailsLinks/AdditionalDetailsLinks")
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkHrefObj = useRef(location.state ?? "/movies");
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
      <Link className={css.link} to={backLinkHrefObj.current}>
        <BiArrowBack size="14" /> Go Back
      </Link>
      {isLoading && <Loader />}
      {error && <LoadError />}
      {movieDetails && (
        <div>
          <MovieDetails movie={movieDetails} />
          <hr />
          <AdditionalDetailsLinks />
          <hr />
        </div>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
