import React, { useState } from "react";
import axios from "axios";
import "./App.css"; 

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setWeather(null);
    setError("");
    setLoading(true);

    try {
      
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );

      if (!geoResponse.data.results) {
        setError("City not found.");
        setLoading(false);
        return;
      }

      const { latitude, longitude } = geoResponse.data.results[0];

      
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      setWeather(weatherResponse.data.current_weather);
    } catch (err) {
      setError("Something went wrong while fetching the weather.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h2>🌤 Weather App</h2>

      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <p>🌡 Temperature: {weather.temperature} °C</p>
          <p>💨 Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
