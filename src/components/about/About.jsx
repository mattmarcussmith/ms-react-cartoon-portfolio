import React from "react";
import "./about.css";
import Myself from "../../assets/avatar-2.png";
import CV from "../../assets/matthewsmithresume.pdf";
import AboutBox from "./AboutBox";

const About = ({ isDarkMode }) => {
  return (
    <section
      className={`about container section ${isDarkMode ? "dark-mode" : ""}`}
      id="about"
    >
      <h2 className="section__title">Self reflection</h2>
      <div className="about__container grid">
        <img className="about__image" src={Myself} alt="Myself" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Matthew Smith, Web Developer based out of Austin, Texas,
              United States. I have rich experience in building contemporary
              user interfaces with accessability and performance optimization in
              mind.
            </p>
            <a href={CV} className="btn" target="_blank">
              Download CV
              <i className="fa-regular fa-note-sticky fa-bounce"></i>
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name ">Backend</h3>
                <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
