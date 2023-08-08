import React, { useState, useEffect } from 'react';
import MovieDetails from '../MovieDetails';
import './SearchBar.css'; // Import the CSS file

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  let [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=db94c20d`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.Search) {
          setMoviesData(data.Search);
        } else {
          setMoviesData([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMoviesData([]);
      });
  }, [searchInput]);

  function handleChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  function displayDetails(movie){
    setSelectedMovie(movie);
  }

  function closeDetails(){
    setSelectedMovie(null)
  }

  return (
    <div>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search here"
          className="search-input"
          onChange={handleChange}
          value={searchInput}
        />
        <button className="search-button" onClick={() => setSearchInput('')}>Clear</button>
      </div>

      <div className="search-results">
        {moviesData.map((movie) => (
          <button className='movie-card' key={movie.imdbID} onClick={() => displayDetails(movie)}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3> 
          </button>
        ))}
      </div>

      {selectedMovie && (
        <div className='modal'>
          <div className='content'>
            <button onClick={closeDetails}>x</button>
            <MovieDetails movieId={selectedMovie.imdbID}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
