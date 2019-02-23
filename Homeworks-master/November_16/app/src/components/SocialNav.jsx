import React from "react";

const SocialNav = () => (
  <ul className="nav social__nav">
    <li className="social__nav--item">
      <a className="link social__nav--link" href="#">
        <i className="social__icon social__icon--fb fab fa-facebook-f" />
      </a>
    </li>
    <li className="social__nav--item">
      <a className="link social__nav--link" href="#">
        <i className="social__icon social__icon--ig fab fa-instagram" />
      </a>
    </li>
    <li className="social__nav--item">
      <a className="link social__nav--link" href="#">
        <i className="social__icon social__icon--tw fab fa-twitter" />
      </a>
    </li>
    <li className="social__nav--item">
      <a className="link social__nav--link" href="#">
        <i className="social__icon social__icon--vm fab fa-vimeo-v" />
      </a>
    </li>
  </ul>
);

export default SocialNav;
