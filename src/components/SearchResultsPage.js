

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { searchMovies, getImageUrl } from '../Api';
import '../App.css';

const SearchResultsPage = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies(query).then((response) => {
      setMovies(response.data.results);
    });
  }, [query]);

  return (
    <div>
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

export default SearchResultsPage;
