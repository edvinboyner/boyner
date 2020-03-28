import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../../store/actions/todoActions";

class DeleteTodo extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      // for()s
      textDecoration: this.props.todos.completed ? "line-through" : "none"
    };
  };

  onClick = id => {
    console.log("ID: ", id);

    this.props.deleteTodo(id); //-- This would delete the first object of the list. But I want a the object linked to the delete button to be removed.
  };

  onToggle = id => {
    console.log("This.props.todos.completed: ", this.props.todos);
    console.log(this.props.todos);
    console.log("OnToggle: ", this.props.todos.id);

    this.props.toggleTodo(id);
  };

  render() {
    const todos = this.props.todos.slice();
    // console.log("todos mate: ", todos);
    console.log(todos.sort((a, b) => a.title.localeCompare(b.title)));

    return (
      <div>
        <ul>
          {todos.map(item => (
            <div style={this.getStyle()}>
              <li>
                {item.title}
                <input
                  type="checkbox"
                  onChange={() => this.onToggle(item.id)}
                />
                <button onClick={() => this.onClick(item.id)} style={btnStyle}>
                  x
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8.2px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
const mapStateToProps = state => {
  return {
    todos: state.firestore.ordered.todos || state.todo.todos
    // todos: state.firestore
  };
};

const mapDispatchToProps = dispatch => {
  // console.log("2: inside mapDispatchToProps - dispatch ", dispatch);
  return {
    deleteTodo: todo => dispatch(deleteTodo(todo)),
    toggleTodo: todo => dispatch(toggleTodo(todo))
  };
};
// The first parameter of the connect() function is:
// mapStateToProps, so we just say null and then pass mapDispatchToProps
// as 2nd parameter.
export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
