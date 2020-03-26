import React, { Component } from "react";
import TodoItem from "../layout/TodoItem";
import DeleteTodo from "./DeleteTodo";

class Todos extends Component {
  render() {
    // console.log("this is Todos this.props.todo: ", this.props);
    return (
      this.props &&
      this.props.todo.todos.map(todo => (
        <React.Fragment>
          <DeleteTodo onDelete={this.props.onDelete} />
          <TodoItem key={todo.id} todo={todo} onToggle={this.props.onToggle} />
        </React.Fragment>
      ))
    );
  }
}

export default Todos;

// //

// import React from "react";
// import TodoItem from "../layout/TodoItem";

// const Todos = ({ todos }) => {
//   console.log("We are here right?", todos);
//   return (
//     <div className="todos-list section">
//       {todos &&
//         todos.map(todo => {
//           return (
//             <TodoItem
//               todo={todo}
//               key={todo.id}
//               onDelete={this.props.onDelete}
//               onToggle={this.props.onToggle}
//             />
//           );
//         })}
//     </div>
//   );
// };

// export default Todos;
