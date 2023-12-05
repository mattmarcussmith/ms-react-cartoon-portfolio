import React, { useState, useEffect } from "react";
import "./home.css";
import Me from "../../assets/avatar-1.gif";
import HeaderContact from "./HeaderContact";
import ScrollDown from "./ScrollDown";
import Clouds from "./Clouds";

import ToggleBtn from "./ToggleBtn";
import DarkModeHome from "./DarkModeHome";

const Home = ({ isDarkMode, toggleDarkMode}) => {


  return (
    <>
      <section className="home container" id="home">
        <ToggleBtn isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {isDarkMode ? (
          <DarkModeHome />
        ) : (
          <div className="intro">
            <img className="home__img" src={Me} alt="Myself" />
            <h1 className="home__name">Matthew Smith</h1>
            <span className="home__education ">I'm a React Engineer.</span>
            <HeaderContact isDarkMode={isDarkMode} />
            <a href="#contact" className="btn">
              Hire Me
            </a>
            <ScrollDown />
            <Clouds />
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
