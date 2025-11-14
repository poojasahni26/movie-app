import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>🎬 Movibes</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/tv">TVShows</Link>
      <Link to="/upcoming">Upcoming</Link>
      <Link to="/auth">Login</Link>
    </div>
  </nav>
);

export default Navbar;