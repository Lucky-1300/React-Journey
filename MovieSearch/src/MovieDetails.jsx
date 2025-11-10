import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Movie.css";

const API_KEY = "11530fb5";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
      .then((res) => setMovie(res.data));
  }, [id]);

  return (
    <div className="details-container">
      {movie ? (
        <>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Title}</h2>
          <p>⭐ Rating: {movie.imdbRating}</p>
          <p>📅 Released: {movie.Released}</p>
          <p>🎭 Genre: {movie.Genre}</p>
          <p>🎬 Director: {movie.Director}</p>
          <p className="plot">{movie.Plot}</p>

          
          <button className="back-btn" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
