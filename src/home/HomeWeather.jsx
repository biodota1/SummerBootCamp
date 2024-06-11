import React, { useEffect, useRef, useState } from "react";
import sunny from "../assets/sunny-day.png";
import fewCloud from "../assets/few-cloud.png";
import scatteredCloud from "../assets/scattered-cloud.png";
import brokenCloud from "../assets/broken-cloud.png";
import showerRain from "../assets/shower-rain.png";
import rain from "../assets/rain.png";
import thunderstorm from "../assets/thunderstorm.png";
import snow from "../assets/snow.png";
import mist from "../assets/mist.png";

export default function HomeWeather({ data }) {
  const [visible, setVisible] = useState(false);
  const imgRef = useRef();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      if (data.weather[0].description === "clear sky") {
        setImageUrl(sunny);
      } else if (
        data.weather[0].description === "few clouds" ||
        data.weather[0].description === "overcast clouds"
      ) {
        setImageUrl(fewCloud);
      } else if (data.weather[0].description === "scattered clouds") {
        setImageUrl(scatteredCloud);
      } else if (data.weather[0].description === "broken clouds") {
        setImageUrl(brokenCloud);
      } else if (data.weather[0].description === "shower rain") {
        setImageUrl(showerRain);
      } else if (data.weather[0].description === "rain") {
        setImageUrl(rain);
      } else if (data.weather[0].description === "thunderstorm") {
        setImageUrl(thunderstorm);
      } else if (data.weather[0].description === "snow") {
        setImageUrl(snow);
      } else if (data.weather[0].description === "mist") {
        setImageUrl(mist);
      }
      setVisible(true);
      imgRef.current.style.transition = "opacity 0.5s ease-out";
    }, 500);
  }, [data]);

  return (
    <div className="absolute h-full w-full flex justify-center pb-10 ">
      <img
        ref={imgRef}
        className="absolute h-full w-full object-cover object-center blur-sm"
        style={{ opacity: visible ? "1" : "0" }}
        src={imageUrl}
        alt=""
      />
      <div className="absolute  h-full w-full flex flex-col text-amber-600 text-center justify-center items-center gap-x-10 gap-y-6 lg:flex-row  mx-[80px] md:mx-[120px] lg:mx-[150px] xl:mx-[250px]">
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
