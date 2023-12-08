import React from "react";

import Me from "../../assets/avatar-1.png";
import HeaderContact from "./HeaderContact";
import ScrollDown from "./ScrollDown";
import Clouds from "./Clouds";
import ToggleBtn from "./ToggleBtn";
import DarkModeHome from "./DarkModeHome";
import "./home.css";

const Home = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <>
      <section className="home container light-mode" id="home">
        <ToggleBtn isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        {isDarkMode ? (
          <DarkModeHome />
        ) : (
          <div className="intro">
            <Clouds />

            <img className="home__img" src={Me} alt="Myself" />
            <h1 className="home__name">Matt Smith</h1>
            <span className="home__education">React Developer</span>
            <HeaderContact />
            <a href="#contact" className="btn">
              Hire Me
            </a>
            <ScrollDown />
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
