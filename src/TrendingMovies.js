import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./display.css";

function TrendingMovies() {
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=95633abe5f127911fae1c245a2d197b7')
            .then((response) => response.json())
            .then((data) => setResults(data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div>
            <h2>Trending Movies</h2>
            <div className="movies-container">
                {results.map((result) => (
                    <div key={result.id} className="movie-card" onClick={() => handleClick(result.id)}>
                        <img src={`https://image.tmdb.org/t/p/w780/${result.poster_path}`} alt='' />
                        <h3>{result.original_title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingMovies;
