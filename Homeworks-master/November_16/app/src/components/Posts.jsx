import React from "react";
import ButtonLink from "./ButtonLink";

const Posts = () => (
  <div className="post-wrapper">
    <div className="post">
      <span className="post-num">01.</span>
      <span className="post__title">
        While Others Talk
        <br />
        We Listen.
      </span>
      <span className="post__date">oct. 16, 2018</span>

      <div className="post__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad
        quae voluptatem temporibus quidem voluptatum! Doloremque perspiciatis
        laudantium itaque eos modi reprehenderit, alias iusto sint magni vel
        quisquam assumenda debitis!
      </div>

      <div className="read-all-btn">
        <ButtonLink
          className="read-all-btn--item"
          href="#"
          text="Read Full Article"
          icon={<i className="read-all-btn--arrow fas fa-caret-right" />}
        />
      </div>
    </div>
  </div>
);

export default Posts;
