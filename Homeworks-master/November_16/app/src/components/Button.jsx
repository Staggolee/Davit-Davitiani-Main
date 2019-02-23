import React from "react";

const ButtonLink = ({ className, type = "subscribe", text, icon = null }) => (
  <button className={className} type={type} >
    {text}
    {icon}
  </button>
);

export default ButtonLink;
