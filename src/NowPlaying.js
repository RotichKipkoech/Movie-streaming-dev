import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./display.css";

function NowPlaying() {
  const [playing, setPlaying] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=95633abe5f127911fae1c245a2d197b7")
      .then((response) => response.json())
      .then((data) => setPlaying(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Now Playing Movies</h2>
      <div className="movies-container">
        {playing.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title} />
            <h3>{movie.original_title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NowPlaying;


