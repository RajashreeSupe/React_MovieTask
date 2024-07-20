
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovies, getImageUrl } from '../Api';
import '../App.css'; 

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
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

export default HomePage;
