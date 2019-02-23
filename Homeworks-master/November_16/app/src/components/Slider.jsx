import Img from "./Img";
import React from "react";
import SliderBtn from "./SliderBtn";

const Slider = ({className, images}) => (
  <div className={className}>
    <SliderBtn
      className="slider-btn slider-btn--left"
      icon={<i className="slider-arrow fas fa-caret-left" />}
    />
    {images.map((img, index)  =>  <Img key={index} className={img.className}> </Img>)}
    <Img className="slide" src="./images/Pic_5.jpg" />

    <SliderBtn
      className="slider-btn slider-btn--right"
      icon={<i className="slider-arrow fas fa-caret-right" />}
    />
  </div>
);

export default Slider;
