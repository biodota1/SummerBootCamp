import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import HomeWeather from "../home/HomeWeather";
import HomeSearch from "../home/HomeSearch";
import SearchTest from "../home/SearchTest";
import api from "../api/weather-api";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`
    );
    const forecastFetch = fetch(
      `${api.base}forecast?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="absolute z-30 w-full h-full flex flex-col">
      <HomeSearch onSearchChange={handleOnSearchChange} />
      {/* <SearchTest onSearchChange={handleOnSearchChange} /> */}
      {currentWeather && <HomeWeather data={currentWeather} />}
    </div>
  );
}
