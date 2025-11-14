import axios from 'axios';

const API_KEY = '258526c1daa5e3887723e0f09eaa39d6';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = (type = 'movie', category = 'popular') =>
  axios.get(`${BASE_URL}/${type}/${category}?api_key=${API_KEY}`);

export const fetchDetails = (type, id) =>
  axios.get(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);

export const searchMedia = (query) =>
  axios.get(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`);