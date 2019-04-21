import React from "react";

import Navigation from "../navigation/Navigation";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Footer from "../footer/Footer";
import Home from "../homepage/Home";

export default function HomePage() {
  return (
    <div className="container">
      <Navigation />
      <ShoppingCart />
      <Home />
      <Footer />
    </div>
  );
}
