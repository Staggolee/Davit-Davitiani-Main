import React from "react";
import Login from "./Login";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

const Header = () => (
  <header className="header">
    <Logo />
    <HeaderNav />
    <Login />
  </header>
);

export default Header;
