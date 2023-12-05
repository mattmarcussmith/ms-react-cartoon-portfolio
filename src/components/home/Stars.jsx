import React from 'react'
import Star from "../../assets/stars.png"
import ShootingStar from "../../assets/shootingStar.gif"
const Stars = () => {
  return (

          <div className="stars">
            <div className="stars-container">
              <img className="star" src={Star} alt="stars" />
              
            </div>
            <div className="shooting-stars-container">
              <img className="shootingStars" src={ShootingStar} alt="shooting stars" />
            </div>
          </div>
        );
      }

export default Stars