import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/About.jsx";
import SettingPage from "./pages/Setting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/setting",
    element: <SettingPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
