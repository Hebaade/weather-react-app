import React from "react";
const WeatherInfoIcons = {
  sunset: "/Icons/temp.svg",
  sunrise: "/Icons/temp.svg",
  humidity: "Icons/humidity.svg",
  wind: "/Icons/wind.svg",
  pressure: "/Icons/pressure.svg",
};
const WeatherInfo = (props) => {
  return (
    <div className="infoCom">
      <img
        src={props.img}
        alt="img"
        style={{
          width: "30px",
          height: "30px",
        }}
      />
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "14px",
          margin: "15px",
        }}>
        {props.value}
        <span
          style={{
            fontSize: "12px",
            textTransform: "capitalize",
          }}></span>
        {props.name}
      </span>
    </div>
  );
};
 const WeatherIcons = {
  "01d": "/Icons/sunny.svg",
  "01n": "/Icons/night.svg",
  "02d": "/Icons/day.svg",
  "02n": "/Icons/cloudy-night.svg",
  "03d": "/Icons/cloudy.svg",
  "03n": "/Icons/cloudy.svg",
  "04d": "/Icons/perfect-day.svg",
  "04n": "/Icons/cloudy-night.svg",
  "09d": "/Icons/rain.svg",
  "09n": "/Icons/rain-night.svg",
  "10d": "/Icons/rain.svg",
  "10n": "/Icons/rain-night.svg",
  "11d": "/Icons/storm.svg",
  "11n": "/Icons/storm.svg",
};
export default function MainContent({ weather }) {
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <div className="MainContent">
      <div className="weather">
        <section
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px auto",
          }}>
          <span style={{ fontSize: "28px" }}>
            {Math.round(weather?.main?.temp)}°c{" "}
          </span>
          <span style={{ opacity: "0.8" }}>
            {" "}
            {`  |  ${weather?.weather[0].description}`}
          </span>
        </section>
        <img src={WeatherIcons[weather?.weather[0].icon] ||"/Icons/perfect-day.png"} alt="img" />
      </div>
      <div className="location">{`${weather?.name}, ${weather?.sys?.country}`}</div>
      <span
        style={{
          margin: "20px 25px 10px",
          fontSize: "14px",
          textAlign: "start",
          width: "90%",
          fontWeight: "bold",
        }}>
        Weather Info:
      </span>
      <div className="weather-info">
        <WeatherInfo
          name={isDay ? "Sunset" : "Sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
          img={WeatherInfoIcons["sunset"]}
        />
        <WeatherInfo
          name="Humidity"
          value={weather?.main?.humidity}
          img={WeatherInfoIcons["humidity"]}
        />
        <WeatherInfo
          name="Wind"
          value={weather?.wind?.speed}
          img={WeatherInfoIcons["wind"]}
        />
        <WeatherInfo
          name="Pressure"
          value={weather?.main?.pressure}
          img={WeatherInfoIcons["pressure"]}
        />
      </div>
    </div>
  );
}
