import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies, searchMovies } from '../api/tmdb';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('upcoming'); // Default to upcoming, but allow sorting

  useEffect(() => {
    if (query) {
      searchMovies(query).then(res => setMovies(res.data.results));
    } else {
      fetchMovies(category).then(res => setMovies(res.data.results));
    }
  }, [query, category]);

  return (
    <div className="page-content">
      <h1>Upcoming</h1>
      <input type="text" placeholder="Search upcoming movies..." value={query} onChange={e => setQuery(e.target.value)} />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="upcoming">Upcoming</option>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="now_playing">Now Playing</option>
      </select>
      <div className="grid">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;