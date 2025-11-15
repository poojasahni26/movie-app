import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmdb';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(res => setMovies(res.data.results.slice(0, 6)));
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Join the Movibes Community</h1>
          <p>Discuss movies, share reviews, and connect.</p>
          <button className="cta-button">Start a Discussion</button>
        </div>
        <div className="hero-image">
          <img src="assets/community-hero.jpg" alt="Community" onerror="this.src='https://via.placeholder.com/600x400?text=Community'" />
        </div>
      </section>
      <section className="community-posts">
        <h2>Latest Discussions</h2>
        <div className="posts-container">
          <div className="post">
            <div className="post-header">
              <img src="assets/avatar1.jpg" alt="Avatar" className="avatar" onerror="this.src='https://via.placeholder.com/50?text=U'" />
              <div><h3>User1</h3><span>1 hour ago</span></div>
            </div>
            <p>Best sci-fi movies?</p>
            <div className="post-actions"><button>Like</button><button>Reply</button></div>
          </div>
          {/* Add more static posts or integrate dynamic if needed */}
        </div>
      </section>
      <section className="featured-movies">
        <h2>Featured Movies</h2>
        <div className="grid">
          {movies.map(movie => (
            <div key={movie.id} className="card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;