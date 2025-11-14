import { useState } from 'react';
import { searchMedia } from '../services/api';
import MovieCard from './MovieCard';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await searchMedia(query);
    setResults(res.data.results);
  };

  return (
    <div className="container">
      <input
        placeholder="Search movies or shows..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {results.map((item) => (
          <MovieCard key={item.id} movie={item} type={item.media_type} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;