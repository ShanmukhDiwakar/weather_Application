import React, { useState } from "react";
import "./TemperatureStyle.css";
import srk from "./Assets/search.png";
import clear from "./Assets/clear.png";
import drizzle from "./Assets/drizzle.png";
import humidity from "./Assets/humidity.png";
import rain from "./Assets/rain.png";
import snow from "./Assets/snow.png";
import wind from "./Assets/wind.png";
import cloud from "./Assets/cloud.png";
import feel from "./Assets/feel.png";
import pressure from "./Assets/pressure.png";
const Temperature = () => {
  let api_key = "a0728d33e2b1e95f876d87cc52c49909";
  const [wicon, setwicon] = useState(cloud);
  const search = async () => {
    const element = document.getElementsByClassName("city");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity_percentage");
    const wind = document.getElementsByClassName("wind-rate");
    const feel = document.getElementsByClassName("feel");
    const pressure = document.getElementsByClassName("pressure");
    const temperature = document.getElementsByClassName("weather_temp");
    const location = document.getElementsByClassName("weather_location");

    humidity[0].innerHTML = data.main.humidity + " % ";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h ";
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °c ";
    location[0].innerHTML = data.name;
    feel[0].innerHTML = Math.floor(data.main.feels_like) + " °c ";
    pressure[0].innerHTML = data.main.pressure + " hPa";
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setwicon(clear);
    }
    if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setwicon(cloud);
    }
    if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setwicon(drizzle);
    }
    if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setwicon(drizzle);
    }
    if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setwicon(rain);
    }
    if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setwicon(rain);
    }
    if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setwicon(snow);
    } else {
      setwicon(clear);
    }
  };
  return (
    <div className="container">
      <div class="top">
        <input
          name="City_Name"
          type="text"
          placeholder="Search"
          className="city"
        />
        <div
          className="search_icon"
          onClick={() => {
            search();
          }}
        >
          <img src={srk} alt="" />
        </div>
      </div>
      <div className="weather_image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather_temp">24</div>
      <div className="weather_location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity_percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
        <div className="element">
          <img src={feel} alt="" className="icon" />
          <div className="data">
            <div className="feel">24</div>
            <div className="text">Feels Like</div>
          </div>
        </div>
        <div className="element">
          <img src={pressure} alt="" className="icon" />
          <div className="data">
            <div className="pressure">59hPa</div>
            <div className="text">Pressure</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
