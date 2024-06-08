import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
