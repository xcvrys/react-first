import './weather.css';
import React from 'react'
import Footer from '../footer/footer';

const Weather = () => {

  const [city, setCity] = React.useState('');
  const [weather, setWeather] = React.useState('');

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)

      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      }
      );
  };

  return (
    <>
      <div className="weather">
        <p>need to setup api key in .env file</p>
        <div className='weather__background'>
          <h1>Weather</h1>
          <div className="weather__input">
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
            <button onClick={getWeather} >Get Weather</button>
          </div>
          <div className="weather__result">
            {weather.main && <p>Temperature <br /> {weather.main.temp}°C</p>}
            {weather.main && <p>Perceptible temperature <br /> {weather.main.feels_like}°C</p>}
            {weather.weather && <p>{weather.weather[0].description}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Weather;
