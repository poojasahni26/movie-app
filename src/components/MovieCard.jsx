import { Link } from 'react-router-dom';

const MovieCard = ({ movie, type }) => {
  const img = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <Link to={`/details/${type}/${movie.id}`}>
      <div className="card">
        <img src={img} alt={movie.title || movie.name} />
        <h3>{movie.title || movie.name}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;