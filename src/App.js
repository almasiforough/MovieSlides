import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routers/MainRouter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

