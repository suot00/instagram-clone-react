import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero-Section/HeroSection";
function App() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
    </Fragment>
  );
}

export default App;
