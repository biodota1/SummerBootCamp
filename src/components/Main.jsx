import React from "react";
import { Outlet } from "react-router-dom";
import main_bg from "../assets/main-bg.png";

export default function Main() {
  return (
    <div
      className="min-h-[92vh] bg-origin-border bg-no-repeat bg-cover relative z-0"
      // style={{ backgroundImage: `url(${main_bg})` }}
    >
      <div className="absolute h-full z-20 w-full bg-gradient-to-t from-slate-800 from-40% to-transparent"></div>
      <Outlet />
    </div>
  );
}
