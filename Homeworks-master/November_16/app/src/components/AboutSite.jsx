import React from "react";

const AboutSite = () => (
  <div className="about-wrapper">
    <div className="container about-site">
      <div className="site-details">
        <div>&copy;1996-2018 Dopos.</div>
        <div>All rights reserved.</div>
      </div>

      <div className="contact">
        <div className="contact__general">
          <div>General inquiries</div>
          <span className="mailto">hello@dopos.studio</span>
        </div>

        <div className="contact__press">
          <div>Press inquiries</div>
          <span className="mailto">press@dopos.studio</span>
        </div>
      </div>

      <div className="policy">
        <div>Privacy Policy</div>
        <div>Terms of Use</div>
      </div>
    </div>
  </div>
);

export default AboutSite;
