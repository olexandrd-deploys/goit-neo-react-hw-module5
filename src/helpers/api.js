import axios from "axios";

const TMDB_READ_TOKEN = import.meta.env.VITE_API_KEY;

const options = {
  headers: {
    Authorization: `Bearer ${TMDB_READ_TOKEN}`,
  },
  params: {
    language: "en-US",
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get("search/movie", {
    ...options,
    params: { query, include_adult: false, page: 1 },
  });
  return response.data.results;
};
