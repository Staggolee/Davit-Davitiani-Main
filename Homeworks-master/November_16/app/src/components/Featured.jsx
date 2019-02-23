import React from "react";
import Slider from "./Slider";
import ButtonLink from "./ButtonLink";

const images = [{ className: "slide", src: "/images/Pic_5.jpg" }];

const Featured = () => (
  <div className="container">
    <div className="featured section">
      <span className="section__title">Featured</span>
      <div className="featured__header">
        <span className="featured__title">
          Making Ideas
          <br />
          Come To Life.
        </span>
        <div className="slide-count">
          <span className="slide__current">01/</span>
          <span className="slide__total">09</span>
        </div>
      </div>

      <Slider className="slider" images={images} />

      <div className="featured__body">
        <div className="featured__desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            fugiat quia odio laborum, harum consequatur ducimus minus delectus
            fugit iste. Pariatur dolore quos fugiat animi laborum amet,
            distinctio culpa facere!
          </p>
          <ButtonLink
            className="btn--featured btn btn--reg"
            href="#"
            text="Case Study"
            icon={<i className="btn--arrow fas fa-caret-right" />}
          />
        </div>
        <div className="featured__details">
          <div className="featured__detail featured__category">
            <span className="featured__detail--title">Category</span>
            <div className="featured__detail--body">
              Design &amp;
              <br />
              Branding
            </div>
          </div>
          <div className="featured__detail featured__client">
            <span className="featured__detail--title">Client</span>
            <div className="featured__detail--body">
              Cusco
              <br />
              Barista
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Featured;
