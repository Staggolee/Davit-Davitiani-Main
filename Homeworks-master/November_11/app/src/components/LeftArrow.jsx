import React from "react";

const LeftArrow = props => {
  return (
    <div className="back__arrow arrow" onClick={props.prevSlide}>
      <i className="fas fa-arrow-left" />
    </div>
  );
};

export default LeftArrow;
