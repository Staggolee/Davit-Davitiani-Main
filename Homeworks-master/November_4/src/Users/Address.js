import React from "react";

const Address = ({ address }) => {
  return (
    <div className="user__address">
      <i className="fas fa-home" />
      <span>
        {address.street} street, {address.suite}, {address.city}, Zip
        <i>({address.zipcode})</i>
      </span>
    </div>
  );
};

export default Address;
