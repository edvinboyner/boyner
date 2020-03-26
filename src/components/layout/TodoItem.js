import React, { Component } from "react";
import { connect } from "react-redux-firebase";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  render() {
    // console.log("FAM? this.props.todo: ", this.props.todo);
    // console.log("this.props.todo.id: ", this.props.todo.id);
    // console.log("props.math.params.id: ", props.math.params.id);
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => this.props.onToggle(id)} />
          {title}{" "}
          {/* <button onClick={() => this.props.onDelete(id)} style={btnStyle}>
            x
          </button> */}
        </p>
      </div>
    );
  }
}

// const btnStyle = {
//   background: "#ff0000",
//   color: "#fff",
//   border: "none",
//   padding: "5px 8.2px",
//   borderRadius: "50%",
//   cursor: "pointer",
//   float: "right"
// };

// const mapStateToProps = (state, ownProps) => {
//   console.log("MAMAAAAA: ", state);
//   const id = ownProps.match.params.id;
//   const todos = state.firestore.data.todos;
//   return {};
// };

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       collection: "todos"
//     }
//   ])
// )(TodoItem);
export default TodoItem;
