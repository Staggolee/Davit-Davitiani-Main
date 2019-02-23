import React from "react";
import ButtonLink from "./ButtonLink";

const Clients = () => (
  <div className="clients--wrapper">
    <div className="clients container">
      <span>Our Clients</span>
      <span className="clients__icon">
        <i className="fas fa-atom" />
      </span>
      <span className="clients__icon">
        <i className="fas fa-star-half-alt" />
      </span>
      <span className="clients__icon">
        <i className="fas fa-bold" />
      </span>

      <ButtonLink href="#" className="btn--clients btn btn--reg" text="View All" />
    </div>
  </div>
);

export default Clients;
