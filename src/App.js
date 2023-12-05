import React, {useState, useEffect} from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevDarkMode => !prevDarkMode);
  };


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode-body");
    } else {
      document.body.classList.remove("dark-mode-body");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="main">
        <Sidebar isDarkMode={isDarkMode} />
        <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <About isDarkMode={isDarkMode}/>
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

export default App;
