import React from "react";

const Comment = ({ comment }) => (
  <div className="comment">
    <p className="comment__title">{comment.name.toUpperCase()}</p>
    <p className="comment__owner">
      <i className="fas fa-envelope" />
      {comment.email}
    </p>
    <p className="comment__body">{comment.body}</p>
  </div>
);

export default Comment;
