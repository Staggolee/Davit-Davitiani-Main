import React from "react";
import Img from "./Img";

const ImgList = ({ className, images }) => (
  <div className={className}>
    {images.map((img, index) => (
      <Img key={index} className={img.className} src={img.src} />
    ))}
  </div>
);

export default ImgList;
