// src/pages/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetailPage.css';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '9249c2c2'; // Replace with your OMDb API key

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        if (data.Response === 'False') {
          setError(data.Error);
          setMovie(null);
        } else {
          setMovie(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(favorite => favorite.imdbID === movie.imdbID);

    if (!isFavorite) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${movie.Title} has been added to your favorites!`);
    } else {
      alert(`${movie.Title} is already in your favorites.`);
    }
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="movie-details">
      {movie && (
        <>
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-info">
            <h1>{movie.Title} ({movie.Year})</h1>
            <p>{movie.Plot}</p>
            <div className="meta-info">
              <span><strong>Director:</strong> {movie.Director}</span>
              <span><strong>Actors:</strong> {movie.Actors}</span>
              <span><strong>Genre:</strong> {movie.Genre}</span>
            </div>
            <button onClick={addToFavorites} className="add-to-favorites-btn">Add to Favorites</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailPage;
