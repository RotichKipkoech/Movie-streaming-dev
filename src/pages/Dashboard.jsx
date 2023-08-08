import React from 'react';
import TopRatedMovies from '../TopRatedMovies';
import TrendingMovies from '../TrendingMovies';
import UpcomingMovies from '../UpcomingMovies';
import NowPlaying from '../NowPlaying';
import PopularMovies from '../PopularMovies';
import MovieDetails from '../MovieDetails';
import SearchBar from '../components/SearchBar';
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard!!!</h2>
      <SearchBar />
      <NowPlaying />
      <PopularMovies />
      <TopRatedMovies />
      <TrendingMovies />
      <UpcomingMovies />

      {/* Render the MovieDetails component conditionally */}
      <Routes>
        {/* The :movieId parameter will be passed as a prop to MovieDetails */}
        <Route path='/movie/:movieId' element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default Dashboard;


