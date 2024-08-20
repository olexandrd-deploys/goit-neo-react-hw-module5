import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../helpers/api";
import Loader from "../Loader/Loader";
import LoadError from "../LoadError/LoadError";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReview, setMovieReview] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      setError(false);
      try {
        const review = await getMovieReviews(movieId);
        setMovieReview(review);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <LoadError />}
      {movieReview && (
        <ul>
          {movieReview.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
