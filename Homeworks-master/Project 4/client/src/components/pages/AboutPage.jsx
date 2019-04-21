import React from "react";

import Navigation from "../navigation/Navigation";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Footer from "../footer/Footer";
import Aboutus from "../about-us/Aboutus";

export default function AboutPage() {
  return (
    <div className="container">
      <Navigation />
      <ShoppingCart />
      <Aboutus />
      <Footer />
    </div>
  );
}
