import React, { useState, useEffect } from "react";
import api from "../api/weather-api";

export default function HomeSearch() {
  const [search, setSearch] = useState("");

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         localStorage.setItem("weather", JSON.stringify(result));
  //       });
  //   };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      const data = await response.json();
      localStorage.setItem("weather", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex gap-x-1" onSubmit={handleSearch}>
      <label className="input input-bordered w-[80%] bg-transparent flex items-center gap-2 rounded-md text-white font-semibold border-slate-300">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <button
        className="btn border-none bg-sky-500 w-[100px] text-white font-bold"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
