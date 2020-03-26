import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../store/actions/todoActions";

class DeleteTodo extends Component {
  onClick = id => {
    console.log("Testing ID: ", id[0]);
    this.props.deleteTodo(id[0]);
  };

  render() {
    return (
      //   <button onClick={this.onClick} style={btnStyle}>
      <button
        onClick={() => this.onClick(this.props.todos)}
        // onClick={this.onClick.bind(this, this.props.id)}
        style={btnStyle}
      >
        x
      </button>
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
