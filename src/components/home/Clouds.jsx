import React from 'react'
import Cloud1 from "../../assets/cloud1.png"
import Cloud2 from "../../assets/cloud2.png"
import Cloud3 from "../../assets/cloud3.png"
import Cloud4 from "../../assets/cloud4.png"
import Cloud5 from "../../assets/cloud5.png"
import Cloud6 from "../../assets/cloud6.png"


const Clouds = () => {
  return (
    <div className="clouds">
        <img className="cloud cloud1"src={Cloud1} alt="cloud" />
        <img className="cloud cloud2"src={Cloud2} alt="cloud" />
        <img className="cloud cloud3"src={Cloud3} alt="cloud" />
        <img className="cloud cloud4"src={Cloud4} alt="cloud" />
        <img className="cloud cloud5"src={Cloud5} alt="cloud" />
        <img className="cloud cloud6"src={Cloud6} alt="cloud" />
 
    </div>
  )
}

export default Clouds
