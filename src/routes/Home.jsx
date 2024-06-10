import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import HomeWeather from "../home/HomeWeather";
import HomeSearch from "../home/HomeSearch";
import fewCloud from "../assets/few-cloud.png";
import sunnyDay from "../assets/sunny-day.png";
import brokenCloud from "../assets/broken-cloud.png";
import scatteredCloud from "../assets/scattered-cloud.png";
import SearchTest from "../home/SearchTest";
import api from "../api/weather-api";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const ref = useRef();
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState({
    weather: [
      {
        main: "",
        description: "",
        icon: "",
      },
    ],
    main: { temp: "" },
    name,
  });

  // useEffect(() => {
  //   const storedData = localStorage.getItem("weather");
  //   if (storedData) {
  //     setWeather(JSON.parse(storedData));
  //   }
  //   let description = weather.weather[0].description;
  //   let url = "";
  //   if (description == "") {
  //     url = sunnyDay;
  //   } else if (
  //     description == "few clouds" ||
  //     description == "overcast clouds"
  //   ) {
  //     url = fewCloud;
  //   } else if (description == "broken clouds") {
  //     url = brokenCloud;
  //   } else if (description == "scattered clouds") {
  //     url = scatteredCloud;
  //   }
  //   setImageUrl(url);
  // }, [weather]);

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
      <img
        className="absolute z-0 h-full w-full object-cover object-bottom"
        src={imageUrl}
        alt=""
        ref={ref}
        style={{ opacity: "0" }}
      />
      <div className="relative z-30 h-full mx-[80px] md:mx-[120px] lg:mx-[150px] xl:mx-[250px] pt-10">
        {/* <HomeSearch /> */}
        <SearchTest onSearchChange={handleOnSearchChange} />
        {currentWeather ? <HomeWeather data={currentWeather} /> : null}
      </div>
    </div>
  );
}
