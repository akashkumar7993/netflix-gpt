import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-44 relative z-90'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      </div>
    </div> 
    )
  );
};

export default SecondaryContainer; 