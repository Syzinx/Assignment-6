import React from "react";

const Movie = ({ movie }) => {
  const API_KEY = "958d3070";
  const posterUrl = `http://img.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`;

  return (
    <div className="movie-card">
      <img
        src={posterUrl}
        alt={movie.Title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/150";
        }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
