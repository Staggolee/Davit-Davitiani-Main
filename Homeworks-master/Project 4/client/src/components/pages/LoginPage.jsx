import React from "react";

import Navigation from "../navigation/Navigation";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Footer from "../footer/Footer";
import Login from "../login/Login";

export default function LoginPage() {
  return (
    <div className="container">
      <Navigation />
      <ShoppingCart />
      <Login />
      <Footer />
    </div>
  );
}
