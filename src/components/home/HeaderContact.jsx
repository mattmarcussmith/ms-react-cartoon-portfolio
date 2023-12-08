import React from "react";
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilCalling } from '@iconscout/react-unicons'
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
      <UilLinkedinAlt />
      </a>

      <a className="home__header-link phone " onClick={handleIconClick}>
        <UilCalling />
      </a>
    </div>
  );
};

export default HeaderContact;
