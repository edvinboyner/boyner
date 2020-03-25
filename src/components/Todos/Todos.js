import React, { Component } from "react";
import TodoItem from "../layout/TodoItem";

class Todos extends Component {
  render() {
    console.log("this is Todos this.props.todo: ", this.props.todo.todos);
    return this.props.todo.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDelete={this.props.onDelete}
        onToggle={this.props.onToggle}
      />
    ));
  }
}

export default Todos;

//
