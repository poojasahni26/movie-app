import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchTVDetails } from '../api/tmdb';

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const isMovie = window.location.pathname.includes('/movie');

  useEffect(() => {
    const fetchDetails = isMovie ? fetchMovieDetails : fetchTVDetails;
    fetchDetails(id).then(res => setDetails(res.data));
  }, [id, isMovie]);

  return (
    <div className="details">
      <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title || details.name} />
      <h1>{details.title || details.name}</h1>
      <p>{details.overview}</p>
      <p>Release: {details.release_date || details.first_air_date}</p>
      <p>Rating: {details.vote_average}</p>
    </div>
  );
};

export default MovieDetails;