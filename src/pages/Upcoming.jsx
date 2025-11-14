import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetchMovies('movie', 'upcoming').then((res) => setUpcoming(res.data.results));
  }, []);

  return (
    <div className="container">
      <h2>Upcoming Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {upcoming.map((movie) => (
          <MovieCard key={movie.id} movie={movie} type="movie" />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;