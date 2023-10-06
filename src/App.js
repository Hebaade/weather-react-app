import { useState } from 'react';
import './App.css';
import CityName from './Components/CityName';
import MainContent from './Components/MainContent';
import axios from 'axios';


function App() {
  const [city,setCity]=useState()
  const [weather, setWearher] = useState()
  const fetchWeather = async (e) => {
    e.preventDefault()
   const res= await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=01fd80bbec483fa9c5897735fdb75232`
   );
    setWearher(res.data)
  }
  return (
    <div className="container">
      <span className="address">Weather App</span>
      {weather ? <MainContent weather={weather} />:<CityName updateCity={setCity} fetchWeather={fetchWeather} />}
    </div>
  );
}

export default App;
