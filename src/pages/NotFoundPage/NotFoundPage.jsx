import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPageContainer}>
      <h1>Page Not Found</h1>
      <img
        className={css.image}
        loading="lazy"
        src="/public/images/404.gif"
        alt="Page Not Found"
      />
      <Link to="/">Go back to the main page</Link>
    </div>
  );
};

export default NotFoundPage;
