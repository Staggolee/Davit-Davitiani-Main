import React from "react";

import Navigation from "../navigation/Navigation";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";

export default function ContactPage() {
  return (
    <div className="container">
      <Navigation />
      <ShoppingCart />
      <Contact />
      <Footer />
    </div>
  );
}
