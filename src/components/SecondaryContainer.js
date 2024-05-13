import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-36 relative z-90'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Hollywood Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Comedies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Indian movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Your Next Watch"} movies={movies.nowPlayingMovies}/>
      </div>
    </div> 
    )
  );
};

export default SecondaryContainer; 