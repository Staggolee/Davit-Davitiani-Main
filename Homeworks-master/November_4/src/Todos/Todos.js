import React, { Component } from "react";
import Todo from "./Todo";
import mapItems from "../mapItems";

export default class Todos extends Component {
  state = {
    todos: null
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(todos => this.setState({ todos }))
      .catch(err => console.log(`Error Occured - ${err}`));
  }

  render() {
    return (
      <>
        <h1>Todos</h1>
        <div className="container flex-box">
          {this.state.todos &&
            mapItems(this.state.todos, this.props.count, todo => (
              <Todo key={todo.id} todo={todo} />
            ))}
        </div>
      </>
    );
  }
}
