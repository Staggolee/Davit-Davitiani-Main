import React, { Component } from "react";
import "./Aboutus.css";

class Aboutus extends Component {
  render() {
    return (
      <div>
        <div className="about-header">
          <p className="about-header-p" />
          <p className="about-us-text">ABOUT US</p>
          <p className="about-header-p" />
        </div>
        <div className="about-main">
          <div className="main-content1" />
          <div className="main-content2">
            Our brand offers you an amazing collection of newest collection
            specially made by fashion designers ."You gotta have style. It helps
            you get down the stairs. It helps you get up in the morning. It’s a
            way of life. Without it, you’re nobody. I’m not talking about lots
            of clothes.” —Diana Vreeland
          </div>
        </div>
        <div className="about-main2">
          <div className="main-content3" />
          <p className="fashion-p">
            “Fashion is part of the daily air and it changes all the time, with
            all the events. You can even see the approaching of a revolution in
            clothes. You can see and feel everything in clothes.” —Diana
            Vreeland
          </p>

          <div className="main-content4" />
        </div>
        <h2 className="about-foot-text">"Fashions fade, style is eternal."</h2>
        <div className="about-foot-nav">
          <p />
          LIMITED EDITION
        </div>
      </div>
    );
  }
}

export default Aboutus;
