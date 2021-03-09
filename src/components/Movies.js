import React from 'react';
import { movies } from '../data';

const listMovies = movies.map( movie =>
  <div>
    <h2>{movie.title}</h2>
    <p>time {movie.time}</p>
    <ul>
      {movie.genres.map( genre => <li>{genre}</li>)}
    </ul>
  </div>
)

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies}
    </div>
  );
};

export default Movies;
