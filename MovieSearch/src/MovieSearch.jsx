import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Movie.css";

const API_KEY = "11530fb5";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async (pageNumber = 1) => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${pageNumber}`
      );

      if (res.data.Response === "False") {
        setError(res.data.Error);
        setMovies([]);
      } else {
        setMovies(res.data.Search);
        setTotalPages(Math.ceil(res.data.totalResults / 10));
        setPage(pageNumber);
      }
    } catch (err) {
      setError("Network Error — Try Again");
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(1);
  };

  return (
    <div className="movie-container">
      <h2>🎬 Movie Search App</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Searching...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>

            <Link to={`/movie/${movie.imdbID}`}>
              <button className="details-btn">Details</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => searchMovies(page - 1)}>
            ⬅ Prev
          </button>
          <span>
            Page {page} / {totalPages}
          </span>
          <button disabled={page === totalPages} onClick={() => searchMovies(page + 1)}>
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
