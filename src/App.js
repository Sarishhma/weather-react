import { useState } from 'react';
import './App.css';
import WeatherCard from './MyComponent/WeatherCard';


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = 'b0e6919e43c6c9a216bd248ffe79abca';

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      setWeather(null);
      return;
    }

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('City not found');
        } else {
          throw new Error('Failed to fetch weather data');
        }
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
 <div className="container py-5">
  <h1 className="text-center mb-4">🌤️ Weather App</h1>

  <div className="row justify-content-center mb-4">
    <div className="col-md-6 d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') fetchWeather();
        }}
      />
      <button className="btn btn-primary" onClick={fetchWeather}>
        Search
      </button>
    </div>
  </div>

  {loading && (
    <div className="text-center">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )}

  {error && <p className="text-center text-danger">{error}</p>}

  {weather && (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <WeatherCard data={weather} />
      </div>
    </div>
  )}
</div>

  );
}

export default App;
