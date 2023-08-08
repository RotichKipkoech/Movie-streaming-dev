import React from 'react';

function Movie({ movie, addToWishlist }) {
  const handleAddToWishlist = () => {
    addToWishlist(movie.id);
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
    </div>
  );
}

export default Movie;
