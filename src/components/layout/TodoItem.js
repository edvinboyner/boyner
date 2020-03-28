// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { deleteTodo } from "../../store/actions/todoActions";

// class DeleteTodo extends Component {
//   getStyle = () => {

//     return {
//       background: "#f4f4f4",
//       padding: "10px",
//       borderBottom: "1px #ccc dotted",
//       textDecoration: this.props.todos.completed ? "line-through" : "none"
//     };
//   };

//   onClick = id => {
//     console.log("ID: ", id);

//     this.props.deleteTodo(id); //-- This would delete the first object of the list. But I want a the object linked to the delete button to be removed.
//   };

//   onToggle = id => {
//     console.log(id);
//   };

//   render() {
//     const todos = this.props.todos.slice();
//     // console.log("todos mate: ", todos);
//     console.log(todos.sort((a, b) => a.title.localeCompare(b.title)));

//     return (
//       <div style={this.getStyle()}>
//         <ul>
//           {todos.map(item => (
//             <li>
//               {item.title}
//               <input type="checkbox" onChange={() => this.onToggle(item.id)} />
//               <button onClick={() => this.onClick(item.id)} style={btnStyle}>
//                 x
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// const btnStyle = {
//   background: "#ff0000",
//   color: "#fff",
//   border: "none",
//   padding: "5px 8.2px",
//   borderRadius: "50%",
//   cursor: "pointer",
//   float: "right"
// };
// const mapStateToProps = state => {
//   return {
//     todos: state.firestore.ordered.todos || state.todo.todos
//     // todos: state.firestore
//   };
// };

// const mapDispatchToProps = dispatch => {
//   // console.log("2: inside mapDispatchToProps - dispatch ", dispatch);
//   return {
//     deleteTodo: todo => dispatch(deleteTodo(todo))
//   };
// };
// // The first parameter of the connect() function is:
// // mapStateToProps, so we just say null and then pass mapDispatchToProps
// // as 2nd parameter.
// export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);

// // import React, { Component } from "react";
// // import { deleteTodo } from "../../store/actions/todoActions";
// // import { connect } from "react-redux";
// // import { firestoreConnect } from "react-redux-firebase";
// // import { compose } from "redux";

// // class TodoItem extends Component {
// //   getStyle = () => {
// //     return {
// //       background: "#f4f4f4",
// //       padding: "10px",
// //       borderBottom: "1px #ccc dotted",
// //       textDecoration: this.props.todo.completed ? "line-through" : "none"
// //     };
// //   };

// //   onClick = id => {
// //     console.log("ID: ", id);

// //     this.props.deleteTodo(id); //-- This would delete the first object of the list. But I want a the object linked to the delete button to be removed.
// //   };

// //   render() {
// //     const todos = this.props.todos.slice();
// //     // console.log("FAM? this.props.todo: ", this.props.todo);
// //     // console.log("this.props.todo.id: ", this.props.todo.id);
// //     // console.log("props.math.params.id: ", props.math.params.id);
// //     console.log(todos.sort((a, b) => a.title.localeCompare(b.title)));
// //     const { id, title } = this.props.todo;
// //     return (
// //       <div style={this.getStyle()}>
// //         <p>
// //           <input type="checkbox" onChange={() => this.props.onToggle(id)} />
// //           {title}{" "}
// //           <ul>
// //             {todos.map(item => (
// //               <li>
// //                 {item.title}
// //                 <button onClick={() => this.onClick(item.id)} style={btnStyle}>
// //                   x
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         </p>
// //       </div>
// //     );
// //   }
// // }

// // const btnStyle = {
// //   background: "#ff0000",
// //   color: "#fff",
// //   border: "none",
// //   padding: "5px 8.2px",
// //   borderRadius: "50%",
// //   cursor: "pointer",
// //   float: "right"
// // };

// // // const mapStateToProps = (state, ownProps) => {
// // //   console.log("MAMAAAAA: ", state);
// // //   const id = ownProps.match.params.id;
// // //   const todos = state.firestore.data.todos;
// // //   return {};
// // // };

// // // export default compose(
// // //   connect(mapStateToProps),
// // //   firestoreConnect([
// // //     {
// // //       collection: "todos"
// // //     }
// // //   ])
// // // )(TodoItem);
// // const mapStateToProps = state => {
// //   return {
// //     todos: state.firestore.ordered.todos || state.todo.todos
// //     // todos: state.firestore
// //   };
// // };

// // const mapDispatchToProps = dispatch => {
// //   // console.log("2: inside mapDispatchToProps - dispatch ", dispatch);
// //   return {
// //     deleteTodo: todo => dispatch(deleteTodo(todo))
// //   };
// // };
// // // The first parameter of the connect() function is:
// // // mapStateToProps, so we just say null and then pass mapDispatchToProps
// // // as 2nd parameter.
// // export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
