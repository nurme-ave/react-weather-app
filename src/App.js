import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const apiKey = '24649dff78554e63950172711223105';
  const [input, setInput] = useState('Tallinn');
  const [url, setUrl] = useState(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Tallinn&aqi=no`
  )
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
    console.log(url)
    fetch(
      url
    )
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
      );
  }, [url]);

  // function handleInput(e) {
  //   e.preventDefault();
  //   console.log(e.target.value)
  //   setInput(e.target.value);
  // }

  return (
    <main className="main-container">
      <section className="section">
        <div className="input-section" >
          <input
            type="text"
            placeholder="City"
            onChange={e => setInput(e.target.value)}
          />
        </div>
          <button onClick={
          () =>
          setUrl(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`)
        } className="submit-button">Search</button>
        <div className="weather-section">
          <h2 className="weather-heading">
            Current weather for <span className="span-heading">{weatherData.city}, {weatherData.country}</span>
          </h2>
          <div className="weather-body">
            <div className="weather-condition">
              <p>{weatherData.condText}</p>
              <img src={weatherData.condIcon} alt="weather-icon"/>
            </div>
            <p>
              <span className="span-temp">{weatherData.tempC}</span>
              <span className="temp-icon">&#8451;</span>
              <span className="span-slash">/</span>
              <span className="span-temp">{weatherData.tempF}</span>
              <span className="temp-icon">&#x2109;</span>
            </p>
            <p className="wind-humidity">
              <span className="span-wind">Wind Speed: </span> 
              {weatherData.windKph} kmh 
              <span className="span-slash-2">/</span>
              {weatherData.windMph} mph
            </p>
            <p className="wind-humidity">
              <span className="span-wind">Humidity:</span> {weatherData.humidity}%
            </p>
            <p className="link-back">Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
