import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <ul>
      {list &&
        list.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviesList;
