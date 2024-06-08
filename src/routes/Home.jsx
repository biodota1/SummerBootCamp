import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import HomeWeather from "../home/HomeWeather";

export default function Home() {
  return (
    <div className="relative z-30 flex flex-col mx-[80px] md:mx-[120px] lg:mx-[150px] xl:mx-[250px]">
      <form className="flex gap-x-1">
        <label className="input input-bordered w-full bg-transparent flex items-center gap-2 rounded-md text-white font-semibold border-slate-300">
          <input type="text" className="grow" placeholder="Search" />
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
        <button className="btn border-none bg-sky-500 w-[100px] text-white font-bold">
          Search
        </button>
      </form>
      <HomeWeather />
    </div>
  );
}
