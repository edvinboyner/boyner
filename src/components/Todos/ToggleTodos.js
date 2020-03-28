import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../../store/actions/todoActions";

class ToggleTodos extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todos.completed ? "line-through" : "none"
    };
  };
  onToggle = id => {
    console.log(id);
  };

  render() {
    const todos = this.props.todos.slice();
    return (
      <div style={this.getStyle()}>
        <ul>
          {todos.map(item => (
            <li>
              {item.title}
              <input type="checkbox" onChange={() => this.onToggle(item.id)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.firestore.ordered.todos || state.todo.todos
    // todos: state.firestore
  };
};

const mapDispatchToProps = dispatch => {
  // console.log("2: inside mapDispatchToProps - dispatch ", dispatch);
  return {
    toggleTodo: todo => dispatch(toggleTodo(todo))
  };
};
// The first parameter of the connect() function is:
// mapStateToProps, so we just say null and then pass mapDispatchToProps
// as 2nd parameter.
export default connect(mapStateToProps, mapDispatchToProps)(ToggleTodos);
