import React from "react";
import Address from "./Address";
import Company from "./Company";
import Details from "./Details";

const User = ({ user }) => (
  <div className="user">
    <Details user={user} />
    <Address address={user.address} />
    <Company company={user.company} />
  </div>
);

export default User;
