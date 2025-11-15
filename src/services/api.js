import axios from 'axios';

const API_KEY = '258526c1daa5e3887723e0f09eaa39d6';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = (category = 'popular') => axios.get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`);
export const fetchTVShows = (category = 'popular') => axios.get(`${BASE_URL}/tv/${category}?api_key=${API_KEY}`);
export const searchMovies = (query) => axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
export const searchTVShows = (query) => axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`);
export const fetchMovieDetails = (id) => axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
export const fetchTVDetails = (id) => axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);