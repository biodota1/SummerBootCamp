import React, { useEffect } from "react";
import cloudy_day from "../assets/cloudy-day.png";

export default function HomeWeather({ data }) {
  return (
    <div className="h-[600px] flex justify-center items-end pb-10">
      <div className="flex flex-col text-white justify-center items-center gap-x-10 gap-y-6 lg:flex-row">
        <h1 className="text-9xl font-semibold">
          {Math.round(data.main.temp)}°C
        </h1>
        <h2 className="text-5xl font-semibold">{data.city}</h2>

        <img
          className="h-[200px] md:h-[250px]"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="cloudy-day"
        />
        <h3 className="text-2xl font-bold">{data.weather[0].description}</h3>
      </div>
    </div>
  );
}
