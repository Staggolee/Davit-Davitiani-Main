import React from "react";
import Logo from "./Logo";
import FooterNav from "./FooterNav";
import SocialNav from "./SocialNav";
import AboutSite from "./AboutSite";

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <div className="footer container">
        <Logo />
        <FooterNav />
        <SocialNav />
      </div>
    </div>

    <AboutSite />
  </footer>
);

export default Footer;
