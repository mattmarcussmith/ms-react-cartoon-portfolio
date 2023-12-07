import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = ({ isDarkMode }) => {
  return (
    <aside className={`aside ${isDarkMode ? "dark-mode" : ""}`}>
      <a href="#home" className="nav__logo">
        <p className="initials">MS</p>
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-paper-plane"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-grid"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-phone"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer ">
        <span className="copyright">&copy; 2023 - 2024</span>
      </div>
    </aside>
  );
};

export default Sidebar;
