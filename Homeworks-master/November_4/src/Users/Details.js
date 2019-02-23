import React from "react";

const Details = ({ user }) => (
  <div className="user__details">
    <span className="user__name">{user.name}</span>
    <span className="user__username">( {user.username} )</span>
    <div className="user__contact">
      <p>
        <i className="fas fa-envelope" />
        {user.email}
      </p>
      <p>
        <i className="fas fa-phone" />
        {user.phone}
      </p>
      <i className="fas fa-link" />
      <a href={`http://www.${user.website}`}>{user.website}</a>
    </div>
  </div>
);

export default Details;
