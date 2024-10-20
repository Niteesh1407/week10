// src/pages/FavoritesPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter(movie => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite movies yet.</p>
      ) : (
        <ul>
          {favorites.map(movie => (
            <li key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                {movie.Title} ({movie.Year})
              </Link>
              <button onClick={() => removeFavorite(movie.imdbID)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
