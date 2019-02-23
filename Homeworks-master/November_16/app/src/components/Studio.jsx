import React from "react";
import ImgList from "./ImgList";
import ButtonLink from "./ButtonLink";

const images = [
  { className: "studio__img", src: "./images/Pic_1.jpg" },
  { className: "studio__img", src: "./images/Pic_2.jpg" },
  { className: "studio__img", src: "./images/Pic_3.jpg" },
  { className: "studio__img", src: "./images/Pic_4.jpg" },
];

const Studio = () => (
  <div className="container">
    <div className="studio section">
      <span className="section__title">Studio</span>
      <div className="section__body">
        <span className="section__header">
          Design Solutions
          <br />
          For Any Media.
        </span>

        <div className="section__descr">
          <p className="section__descr--text">
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipisicing elit.
          </p>
        </div>
        <ButtonLink
          className="btn btn--reg"
          href="#"
          text="Learn More"
          icon={<i className="btn--arrow fas fa-caret-right" />}
        />
      </div>
      <ImgList className="studio__images" images={images} />
    </div>
  </div>
);

export default Studio;
