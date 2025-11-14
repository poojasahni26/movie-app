import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../services/api';

const MovieDetails = () => {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchDetails(type, id)
      .then((res) => setDetails(res.data))
      .catch((err) => console.error('Error fetching details:', err));
  }, [type, id]);

  if (!details) return <div className="container">Loading...</div>;

  const img = `https://image.tmdb.org/t/p/w500${details.poster_path}`;

  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <img
        src={img}
        alt={details.title || details.name}
        style={{ width: '300px', borderRadius: '8px', marginRight: '1rem', marginBottom: '1rem' }}
      />
      <div style={{ maxWidth: '600px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          {details.title || details.name}
        </h2>
        <p style={{ marginBottom: '1rem', color: '#555' }}>{details.overview}</p>
        <p>
          <strong>Rating:</strong> ⭐ {details.vote_average} / 10
        </p>
        <p>
          <strong>Release Date:</strong> 📅 {details.release_date || details.first_air_date}
        </p>
        {details.genres && (
          <p>
            <strong>Genres:</strong>{' '}
            {details.genres.map((genre) => genre.name).join(', ')}
          </p>
        )}
        {details.runtime && (
          <p>
            <strong>Runtime:</strong> ⏱️ {details.runtime} minutes
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;