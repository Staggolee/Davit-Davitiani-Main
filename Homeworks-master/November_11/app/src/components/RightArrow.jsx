import React from "react";

const RightArrow = props => {
  return (
    <div className="next__arrow arrow" onClick={props.nextSlide}>
      <i className="fas fa-arrow-right" />
    </div>
  );
};

export default RightArrow;
