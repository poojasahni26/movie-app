import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies('movie', 'popular').then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="container">
      <h2>Popular Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} type="movie" />
        ))}
      </div>
    </div>
  );
};

export default Movies;