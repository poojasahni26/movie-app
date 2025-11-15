import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

// Fetch popular movies
export const fetchMovies = async () => {
  const response = await tmdb.get('/movie/popular');
  return response.data;
};

// Fetch movie or TV details
export const fetchMovieDetails = async (type, id) => {
  const response = await tmdb.get(`/${type}/${id}`);
  return response.data;
};

// Fetch TV show details
export const fetchTVDetails = async (id) => {
  const response = await tmdb.get(`/tv/${id}`);
  return response.data;
};

// Search movies
export const searchMovies = async (query) => {
  const response = await tmdb.get('/search/movie', {
    params: { query },
  });
  return response.data;
};

// Search TV shows
export const searchTVShows = async (query) => {
  const response = await tmdb.get('/search/tv', {
    params: { query },
  });
  return response.data;
};

// Fetch popular TV shows
export const fetchTVShows = async () => {
  const response = await tmdb.get('/tv/popular');
  return response.data;
};

// Fetch upcoming movies
export const fetchUpcomingMovies = async () => {
  const response = await tmdb.get('/movie/upcoming');
  return response.data;
};

export default tmdb;