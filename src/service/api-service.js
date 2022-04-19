import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchApi() {
  const response = await axios.get(`/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.data.results;
};

export async function fetchSearchMovie(query) {
  const response = await axios.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  return response.data.results;
};

export async function fetchMovieId(id) {
  const response = await axios.get(`/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.data;
};

export async function fetchCast(id) {
  const response = await axios.get(`/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  return response.data.cast;
};

export async function fetchReview(id) {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
  return response.data.results;
};

