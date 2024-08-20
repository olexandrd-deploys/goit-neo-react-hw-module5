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
