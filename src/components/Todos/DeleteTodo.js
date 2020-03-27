import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../store/actions/todoActions";

class DeleteTodo extends Component {
  onClick = id => {
    console.log("ID: ", id);

    this.props.deleteTodo(id); //-- This would delete the first object of the list. But I want a the object linked to the delete button to be removed.
  };

  render() {
    const todos = this.props.todos.slice();
    console.log("todos mate: ", todos);
    console.log(todos.sort((a, b) => a.title.localeCompare(b.title)));

    return (
      <div>
        <ul>
          {todos.map(item => (
            <li>
              <span>{item.title}</span>
              <button onClick={() => this.onClick(item.id)} style={btnStyle}>
                x
              </button>
            </li>
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
    deleteTodo: todo => dispatch(deleteTodo(todo))
  };
};
// The first parameter of the connect() function is:
// mapStateToProps, so we just say null and then pass mapDispatchToProps
// as 2nd parameter.
export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
