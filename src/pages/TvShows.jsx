import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const TvShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchMovies('tv', 'popular').then((res) => setShows(res.data.results));
  }, []);

  return (
    <div className="container">
      <h2>Popular TV Shows</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shows.map((show) => (
          <MovieCard key={show.id} movie={show} type="tv" />
        ))}
      </div>
    </div>
  );
};

export default TvShows;