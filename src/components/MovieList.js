import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';
import Movie from './Movie';

function MovieList({ addToWishlist }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} addToWishlist={addToWishlist} />
      ))}
    </div>
  );
}

export default MovieList;
