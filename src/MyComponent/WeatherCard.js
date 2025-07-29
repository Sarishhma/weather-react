import React from 'react';
import App from "../App";
export default function WeatherCard({ data }) {
  if (!data || !data.name) return null;

  const { name, sys, main, weather, wind } = data;

  // Defensive fallback
  const weatherInfo = weather && weather[0] ? weather[0] : {};
  const icon = weatherInfo.icon || '01d';
  const description = weatherInfo.description || 'No description';

  return (
    <div className="weather-card">
      <h2>
        {name}, {sys?.country || 'N/A'}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p className="temp">{main ? Math.round(main.temp) : 'N/A'}°C</p>
      <p className="description">{description}</p>
      <div className="details">
        <p>💧 Humidity: {main?.humidity ?? 'N/A'}%</p>
        <p>💨 Wind: {wind?.speed ?? 'N/A'} m/s</p>
      </div>
    </div>
  );
}
