import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about.jsx";
import SettingPage from "./pages/setting.jsx";

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
