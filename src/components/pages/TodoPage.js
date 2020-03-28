import React, { Component } from "react";
import Todos from "../Todos/Todos";
import AddTodo from "../Todos/AddTodo";
import uuid from "../../../node_modules/uuid";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import TodoItem from "../Todos/TodoItem";
import ToggleTodos from "../Todos/ToggleTodos";

class TodoPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* Lets add some props */}
        <AddTodo addTodo={this.addTodo} />
        {/* <ToggleTodos /> */}
        <TodoItem />
        {/* <Todos
          todo={this.props}
          onToggle={this.onToggle}
          // onDelete={this.onDelete}
        /> */}
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   // console.log("2: inside mapDispatchToProps - dispatch ", dispatch);
//   return {
//     toggle: todo => dispatch(toggle(todo))
//   };
// };

/* 
This function takes in the state of our store (we have access to that).
Then we return an object and this object is going to represent which properties
are attached to the props of this component. So then we can access them 
inside this comopnent.  
*/
const mapStateToProps = state => {
  // console.log("state mate inside mapstate in TodoPage", state);
  return {
    todos: state.firestore.ordered.todos || state.todo.todos
  };
};

/* Vi slänger in mapStateToProps som parameter till connect så connect-funktionen
vet vad den ska connecta till, vilken data den ska hämta från store. Vi mappar det 
till våran props objekt här inne (this.props). Så nu har vi tillgång till 
props.todo i denna component och vi får datan. 
*/

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "todos"
    }
  ])
)(TodoPage);
/* What happens here /\: When this component is active the collection 
  that we want to listen to is the todos collection. And whenever this 
  component first loads or whenever the firestore data is changed in the
  database online, this will now induce the firestore reducer to sync this
  store state (rootReducer) with that todos collection in firestore.
  So now whenever the database changes. This component will hear that 
  because we're connected to that collection and in turn it will trigger
  the firestore reducer to update the state to reflect that change. 
  
  
  */
// state = {
//   todos: []
// };

// addTodo = title => {
//   const todos = [...this.state.todos];
//   const mofo = {
//     id: uuid.v4(),
//     title,
//     completed: false
//   };
//   todos.push(mofo);
//   this.setState({ todos });
// };

// onDelete = id => {
//   const todos = this.state.todos.filter(c => c.id !== id);
//   this.setState({ todos });
// };

// onToggle = id => {
//   console.log("ONTOGGLE ARE WE HERE?!: ", this.props.todos);
//   console.log(" ON TOGGLE: this.state.todos.id: ", this.props.todos[0]);

//   this.setState({
//     todos: this.state.todos.map(todo => {
//       console.log("ON TOGGLE!!!: TODO: ", todo);
//       if (todo.id === id) {
//         console("On TOGGLE: DO WE GET IN THE IF=?!?!?!? ");
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     })
//   });
// };
