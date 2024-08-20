import { Link, useLocation, useParams } from "react-router-dom";
import css from "./AdditionalDetails.module.css";

const AdditionalDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  return (
    <div className={css.additionalInfo}>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            state={location.state ?? "/movies"}
          >
            {" "}
            Cast{" "}
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={location.state ?? "/movies"}
          >
            {" "}
            Reviews{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalDetails;
