import React from 'react'

export default function CityName({ updateCity, fetchWeather }) {
  return (
    <div className="cityNameCom">
      <img src="/Icons/perfect-day.svg" alt="img" />
      <label>Find weather of your city</label>
      <div>
        <input
          placeholder="City name..."
          onChange={(e) => updateCity(e.target.value)}
        />
        <button onClick={fetchWeather}>search</button>
      </div>
    </div>
  );
}
