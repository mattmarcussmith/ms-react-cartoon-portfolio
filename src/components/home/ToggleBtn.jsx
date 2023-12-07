import React from "react";

const ToggleBtn = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      <span className="slider round">
        <i
          className={`icon ${
            isDarkMode ? "fa-solid fa-moon fa-fade" : "fa-solid fa-sun fa-spin"
          }`}
        ></i>
      </span>
    </label>
  );
};

export default ToggleBtn;
