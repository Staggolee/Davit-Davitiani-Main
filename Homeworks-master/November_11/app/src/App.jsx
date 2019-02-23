import React, { Component } from "react";
import Slide from "./components/Slide";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://placekitten.com/500/500",
        "https://placekitten.com/500/501",
        "https://placekitten.com/500/502",
        "https://placekitten.com/500/503",
      ],
      currentSlide: 0,
      translateValue: 0,
      loop: false,
    };
  }


  moveSlide = () => {
    const translateValue = document.querySelector('.slider').clientWidth;
    console.log(translateValue);
  }

  prevSlide = () => {
    if (this.state.length - 1 === this.state.currentSlide) {
      return;
    }

    this.setState(prevState => {
      return {
        currentSlide: prevState.currentSlide - 1,
        translateValue: prevState.translateValue + "-500",
      };
    });
  };

  nextSlide = () => {
    if (this.state.images.length - 1 === this.state.currentSlide) {
      this.setState({ currentSlide: 0, translateValue: 0 });
    }

    this.setState(prevState => {
      return {
        currentSlide: prevState.currentSlide,
        translateValue: prevState.translateValue + "-500 ",
      };
    });
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider__container"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-in-out 450ms",
          }}
        >
          {this.state.images.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </div>

        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}

export default App;
