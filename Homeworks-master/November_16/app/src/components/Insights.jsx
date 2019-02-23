import React from "react";
import Button from "./Button";
import PostsNav from "./PostsNav";
import Posts from "./Posts";

const Insights = () => (
  <div className="insights container">
    <div className="blog">
      <span className="section__title">Insights</span>

      <span className="insights__title">
        Latest
        <br />
        Blog Posts
      </span>

      <div className="subscribe">
        <span className="subscribe__title">
          Subscribe to recieve
          <br />
          free email updates
        </span>
        <span className="subscribe__msg">Lorem ipsum dolor!</span>
        <div className="subscribe__input">
          <input
            className="subscribe__input--item"
            type="text"
            placeholder="Enter your email"
          />
        </div>

        <Button
          className="btn btn--reg"
          text="Subscribe"
          icon={<i className="btn--arrow fas fa-caret-right" />}
        />
      </div>
    </div>

    <Posts />

    <PostsNav />
  </div>
);

export default Insights;
