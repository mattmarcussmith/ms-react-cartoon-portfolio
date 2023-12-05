import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.gif";
import HeaderContact from "./HeaderContact";
import ScrollDown from "./ScrollDown";
import Stars from "./Stars"


const DarkModeHome = () => {
 
  return (
    <>
    <section className="home container dark-mode"id="home">
      <Stars />
      <div className="intro">
        <img className="home__img" src={Me} alt="Myself" />
        <h1 className="home__name">Matthew Smith</h1>
        <span className="home__education">I'm a React Engineer.</span>
        <HeaderContact />
        <a href="#contact" className="btn dark-mode">
          Hire Me
        </a>
        <ScrollDown />
      </div>
  
    </section>
  </>
  );
};

export default DarkModeHome;
