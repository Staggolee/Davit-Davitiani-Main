import React from "react";

const Todo = ({ todo }) => (
  <div className="todo">
    <p className="todo__title">{todo.title.toUpperCase()}</p>
    <p className="todo__user">User Id: {todo.userId}</p>
    <p className="todo__status">
      {!todo.completed && "Not "}
      Completed
      {todo.completed ? (
        <i className="fas fa-check green" />
      ) : (
        <i className="fas fa-times red" />
      )}
    </p>
  </div>
);

export default Todo;
