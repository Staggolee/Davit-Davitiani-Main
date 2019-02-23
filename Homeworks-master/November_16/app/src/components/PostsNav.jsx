import React from "react";
import SliderBtn from "./SliderBtn";
import ButtonLink from "./ButtonLink";

const PostsNav = () => (
  <div className="post-nav">
    <div className="post-buttons">
      <SliderBtn
        className="post-btn"
        icon={<i className="post-btn-arrow fas fa-caret-left" />}
      />
      <SliderBtn
        className="post-btn"
        icon={<i className="post-btn-arrow fas fa-caret-right" />}
      />
    </div>

    <ButtonLink
      className="btn btn--reg"
      href="#"
      text="All Articles"
      icon={<i className="btn--arrow fas fa-caret-right" />}
    />
  </div>
);

export default PostsNav;
