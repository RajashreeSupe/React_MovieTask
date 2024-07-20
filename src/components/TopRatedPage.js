
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopRatedMovies, getImageUrl } from '../Api';
import '../App.css';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
            </Link>
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <Link to={`/movie/${movie.id}`}>
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
