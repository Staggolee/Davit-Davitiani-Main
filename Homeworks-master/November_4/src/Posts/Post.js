import React from "react";

const Post = ({ post }) => (
  <div className="post">
    <p className="post__title">{post.title.toUpperCase()}</p>
    <p className="post__body">{post.body}</p>
  </div>
);

export default Post;
