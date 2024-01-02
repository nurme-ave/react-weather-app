import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [input, setInput] = useState('Tallinn');
  const [url, setUrl] = useState(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}&aqi=no`
  );
  const [weatherData, setWeatherData] = useState({
    city: '',
    country: '',
    tempC: '',
    tempF: '',
    condText: '',
    condIcon: '',
    windMph: '',
    windKph: '',
    humidity: '',
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setWeatherData({
          city: data.location.name,
          country: data.location.country,
          tempC: data.current.temp_c,
          tempF: data.current.temp_f,
          condText: data.current.condition.text,
          condIcon: data.current.condition.icon,
          windMph: data.current.wind_mph,
          windKph: data.current.wind_kph,
          humidity: data.current.humidity,
        })
      )
      .catch((error) => {
      });
  }, [url]);

  return (
    <main className="main-container">
      <section className="section">
        <div className="input-section">
          <input
            type="text"
            placeholder="City"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>

        <button
          onClick={() =>
            setUrl(
              `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input}&aqi=no`
            )
          }
          className="submit-button"
        >
          Search
        </button>

        <div className="weather-section">
          <h2 className="weather-heading">
            Current weather for{' '}
            <span className="span-heading">
              {weatherData.city}, {weatherData.country}
            </span>
          </h2>
          <div className="weather-body">
            <div className="weather-condition">
              <p>{weatherData.condText}</p>
              <img src={weatherData.condIcon} alt="weather-icon" />
            </div>
            <p>
              <span className="span-temperature">{weatherData.tempC}</span>
              <span className="span-temperature-icon">&#8451;</span>
              <span className="span-temperature-slash">/</span>
              <span className="span-temperature">{weatherData.tempF}</span>
              <span className="span-temperature-icon">&#x2109;</span>
            </p>
            <p className="wind-and-humidity">
              <span className="span-wind-and-humidity">Wind speed: </span>
              {weatherData.windKph} kmh
              <span className="span-wind-and-humidity-slash">/</span>
              {weatherData.windMph} mph
            </p>
            <p className="wind-and-humidity">
              <span className="span-wind-and-humidity">Humidity:</span>{' '}
              {weatherData.humidity}%
            </p>
            <p className="link-back">
              Powered by{' '}
              <a href="https://www.weatherapi.com/" title="Free Weather API">
                WeatherAPI.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
