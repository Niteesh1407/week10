import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchMoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '9249c2c2'; 

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong with the request');
        }
        return response.json();
      })
      .then((data) => {
        if (data.Response === 'False') {
          setError(data.Error);
          setMovies([]);
        } else {
          setMovies(data.Search);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              {movie.Title} ({movie.Year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMoviesPage;
