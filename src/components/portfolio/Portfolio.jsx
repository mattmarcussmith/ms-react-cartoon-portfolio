import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Latest work </h2>

      <div className="work__container grid">
        {items.map((item) => {
          const { id, image, title, desc, gitHubLink } = item;
          return (
            <div className="work__card" key={id}>
              <h3 className="work__title">{title}</h3>
              <span className="work__desc">{desc}</span>
              <a href={gitHubLink} className="work__button" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
              <div className="work__thumbnail">
                <img
                  src={image}
                  alt="project thumbnail"
                  className="work__img"
                />
                <div className="work__mask"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
