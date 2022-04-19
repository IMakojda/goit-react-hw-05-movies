import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const api_key = "3284913a940180ec63ebc0044db949d5";

export async function fetchApi() {
  const response = await axios.get(`/trending/movie/week?api_key=${api_key}`);
  return response.data.results;
};

export async function fetchSearchMovie(query) {
  const response = await axios.get(`/search/movie?api_key=${api_key}&query=${query}&language=en-US&page=1&include_adult=false`);
  return response.data.results;
};

export async function fetchMovieId(id) {
  const response = await axios.get(`/movie/${id}?api_key=${api_key}`);
  return response.data;
};

export async function fetchCast(id) {
  const response = await axios.get(`/movie/${id}/credits?api_key=${api_key}&language=en-US`);
  return response.data.cast;
};

export async function fetchReview(id) {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`);
  return response.data.results;
};

