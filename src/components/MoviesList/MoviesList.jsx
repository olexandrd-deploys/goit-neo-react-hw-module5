import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <ul>
      {list &&
        list.map(({ id, title, release_date }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {title} {`(${release_date.slice(0, 4)})`}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviesList;
