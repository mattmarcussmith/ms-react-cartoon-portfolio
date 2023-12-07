import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.png";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "I have a solid understanding of UI (User Interface) and UX (User Experience) principles for creating effective and user-friendly applications",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "I specialize in crafting seamless and user-friendly web applications with a strong emphasis on front-end development.",
  },
  {
    id: 3,
    image: Image3,
    title: "Mobile Development",
    description:
      "I have a proficiency in developing vibrant, user-friendly mobile applications with a strong focus on responsiveness front-end experiences.",
  },
];

const Services = ({ isDarkMode }) => {
  return (
    <section
      className={`services container section  ${isDarkMode ? "dark-mode" : ""}`}
      id="services"
    >
      <h2 className="section__title">Services</h2>
      <div className="services__container">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="services" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
