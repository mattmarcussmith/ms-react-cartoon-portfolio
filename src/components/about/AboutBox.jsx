import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedNumber = ({ value, config }) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: value },
    config: config,
  });
  return <animated.h3>{props.number.to((val) => Math.floor(val))}</animated.h3>;
};

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <AnimatedNumber
            value={102}
            config={{ duration: 60000, tension: 40, friction: 30 }}
          />
          <span className="about__subtitle">Projects completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <AnimatedNumber
            value={6700}
            config={{ duration: 100000, tension: 10, friction: 50 }}
          />
          <span className="about__subtitle">Cups of coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="fa-solid fa-dog"></i>
        <div>
          <AnimatedNumber
            value={1e6}
            config={{ duration: 1700000, tension: 60, friction: 45 }}
          />
          <span className="about__subtitle">Dogs pet</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
