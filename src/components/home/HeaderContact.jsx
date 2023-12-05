import React from "react";

const HeaderContact = () => {
  const phoneNumber = "5127754243";

  const handleIconClick = () => {
    window.location.href = `tel:+1${phoneNumber}`;
  };

  return (
    <div className="home__header-contacts dark-mode">
      <a
        href="https://www.linkedin.com/in/mattmarcussmith/"
        className="home__header-link linkedin "
      >
        <i className="fa-brands fa-linkedin fa-bounce "></i>
      </a>

      <a className="home__header-link phone " onClick={handleIconClick}>
        <i className="fa-solid fa-phone fa-bounce "></i>
      </a>
    </div>
  );
};

export default HeaderContact;
