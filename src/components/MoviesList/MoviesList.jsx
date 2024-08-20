// const trendingMoviesList = getTrendingMovies();

const MoviesList = ({ list }) => {
  return (
    <ul>{list && list.map(({ id, title }) => <li key={id}>{title}</li>)}</ul>
  );
};

export default MoviesList;

// return (
//   <div key={movie.id}>
//     <h2>{movie.title}</h2>
//     <img
//       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//       alt={movie.title}
//     />
//     <p>{movie.overview}</p>
//   </div>
// );
