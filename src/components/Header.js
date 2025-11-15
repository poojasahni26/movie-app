import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="logo"><Link to="/">Movibes</Link></div>
    <nav className="nav">
      <Link to="/">Community</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/tvshows">TV Shows</Link>
      <Link to="/upcoming">Upcoming</Link>
      <Link to="/login">Login</Link>
    </nav>
    <button className="menu-toggle" id="menu-toggle">☰</button>
  </header>
);

export default Header;