import React from "react";
import "./App.css";
import Home from "./components/Home";
import Studio from "./components/Studio";
import Featured from "./components/Featured";
import Clients from "./components/Clients";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Home />
    <Studio />
    <Featured />
    <Clients />
    <Insights />
    <Footer />
  </>
);

export default App;
