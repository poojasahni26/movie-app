import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTVShows, searchTVShows } from '../api/tmdb';

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('popular');

  useEffect(() => {
    if (query) {
      searchTVShows(query).then(res => setTvShows(res.data.results));
    } else {
      fetchTVShows(category).then(res => setTvShows(res.data.results));
    }
  }, [query, category]);

  return (
    <div className="page-content">
      <h1>TV Shows</h1>
      <input type="text" placeholder="Search TV shows..." value={query} onChange={e => setQuery(e.target.value)} />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="on_the_air">On The Air</option>
      </select>
      <div className="grid">
        {tvShows.map(tv => (
          <Link key={tv.id} to={`/tv/${tv.id}`} className="card">
            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name} />
            <h3>{tv.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TvShows;