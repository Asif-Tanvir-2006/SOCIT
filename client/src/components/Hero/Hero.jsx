import React from "react";
import "./Hero.css"
function Hero() {

    return (
        <div className="Hero-Frame">
        <div className="Hero">
          <div className="left">
            <div className="upper">
              <h1>Our Mission</h1>
              <div className="text"><p>some lorem text to create importance and make everyone believe we have cool content coming up</p></div>
            </div>
            <div className="lower"></div>
          </div>
          <div className="middle">
            <div className="logo"></div>
            <div className="buffer"></div>
            <div className="font">Students'
              <div className='lower'>
                Corner
  
              </div>
            </div>
            <div className="buffer"></div>
          </div>
          <div className="right">
            <div className="upper"></div>
            <div className="lower">
              <h1>Our Mission</h1>
              <div className="text"><p>some lorem text to create importance and make everyone believe we have cool content coming up</p></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;
