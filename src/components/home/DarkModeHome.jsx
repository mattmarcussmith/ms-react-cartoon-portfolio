import React from "react";
import "./home.css";
import Me from "../../assets/avatar-4.png";
import HeaderContact from "./HeaderContact";
import ScrollDown from "./ScrollDown";
import Stars from "./Stars"


const DarkModeHome = () => {
 
  return (
   
    <section className="home container dark-mode"id="home">
      <Stars />
      <div className="intro">
        <img className="home__img" src={Me} alt="Myself" />
        
        <h1 className="home__name dark-home">Matt Smith</h1>
        <span className="home__education">React Developer</span>
        <HeaderContact />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
  
    </section>

  );
};

export default DarkModeHome;
