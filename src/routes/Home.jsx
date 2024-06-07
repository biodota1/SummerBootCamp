import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
