import { Link, useParams } from "react-router-dom";
import css from "./AdditionalDetailsLinks.module.css";

const AdditionalDetailsLinks = () => {
  const { movieId } = useParams();

  return (
    <div className={css.additionalInfo}>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}> Cast </Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}> Reviews </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalDetailsLinks;
