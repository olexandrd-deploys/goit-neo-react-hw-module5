import css from "./LoadError.module.css";

const LoadError = () => {
  return (
    <div className={css.loadError}>
      <h2>Something went wrong</h2>
      <p>There was an error loading the data. Please try again</p>
      <img
        className={css.image}
        loading="lazy"
        src="/public/images/networkError.jpg"
        alt="Network Error"
      />
    </div>
  );
};

export default LoadError;
