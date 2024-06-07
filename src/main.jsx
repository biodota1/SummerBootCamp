import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import Main from "./components/Main.jsx";
import Login from "./routes/Login.jsx";

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      { path: "/", element: <Main /> },
      { path: "login", element: <Login /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
