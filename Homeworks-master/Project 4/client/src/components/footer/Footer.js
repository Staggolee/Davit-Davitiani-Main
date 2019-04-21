import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="flex-container">
        <div className="footer-brand">
          <h4 className="footer-text">About Brand</h4>
          <p className="footer-paragraph">
            Limited Edition is stylish concept of nowadays fashion , limiited
            collections from different designers and etc
          </p>
        </div>
        <div className="footer-info">
          <h4 className="footer-text">Information</h4>
          <ul>
            <li className="footer-li">Privacy and policy</li>
            <li className="footer-li">FAQ</li>
            <li className="footer-li">payment</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-text">Contacts</h4>
          <ul>
            <li className="footer-li">+995 598 887 918</li>
            <li className="footer-li">Essence@gmail.com</li>
            <li className="footer-li">open hours M-F 10:00-19:00</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-text">Address</h4>
          <ul>
            <li className="footer-li">Tbilisi</li>
            <li className="footer-li">Rustaveli Ave. 10</li>
            <li className="footer-li">Map</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-text">Social Network</h4>
          <ul>
            <li className="footer-li">Facebook</li>
            <li className="footer-li">Instagram</li>
            <li className="footer-li">Twitter</li>
          </ul>
        </div>
        <br />
      </div>
    </div>
  );
}
