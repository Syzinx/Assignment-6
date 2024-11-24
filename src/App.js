import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";
import "./index.css";


const API_KEY = "a6bc0b6e";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}&s=${query}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies("BATMAN");
  }, []);

  return (
    <div className="App">
      <Header title="PRO MOVIE" />
      <Search searchMovies={fetchMovies} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-list">
          {movies.length > 0 ? (
            movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
          ) : (
            <p>No movies found. Try searching for something else!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
