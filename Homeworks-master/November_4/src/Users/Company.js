import React from "react";

const Company = ({ company }) => (
  <div className="user__company">
    <i className="fas fa-building" />
    <span>
      {company.name} street, {company.catchPhrase}
    </span>
  </div>
);

export default Company;
