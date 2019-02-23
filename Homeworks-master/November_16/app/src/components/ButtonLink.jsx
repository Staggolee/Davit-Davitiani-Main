import React from "react";

const ButtonLink = ({ className, href, text, icon = null }) => (
  <a className={className} href={href}>
    {text}
    {icon}
  </a>
);

export default ButtonLink;
