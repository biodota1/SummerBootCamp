import React from "react";
import cloudy_day from "../assets/cloudy-day.png";

export default function HomeWeather() {
  return (
    <div className="h-[600px] flex justify-center items-end pb-10">
      <div className="flex flex-col text-white justify-center items-center gap-x-10 gap-y-10 md:flex-row">
        <h1 className="text-9xl font-semibold">08°C</h1>
        <h2 className="text-5xl font-semibold">London</h2>
        <img className="h-[250px]" src={cloudy_day} alt="cloudy-day" />
      </div>
    </div>
  );
}
