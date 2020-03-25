import React, { Component } from "react";
import Todos from "../Todos/Todos";
import AddTodo from "../Todos/AddTodo";
import uuid from "../../../node_modules/uuid";
import { connect } from "react-redux";

class TodoPage extends Component {
  state = {
    todos: []
  };

  addTodo = title => {
    const todos = [...this.state.todos];
    const mofo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    todos.push(mofo);
    this.setState({ todos });
  };

  onDelete = id => {
    const todos = this.state.todos.filter(c => c.id !== id);
    this.setState({ todos });
  };

  onToggle = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  render() {
    console.log("Hej Edvin, här är this.props: ", this.props);

    return (
      <div>
        {/* Lets add some props */}

        <AddTodo addTodo={this.addTodo} />
        <Todos
          todo={this.props}
          onToggle={this.onToggle}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
/* 
This function takes in the state of our store (we have access to that).
Then we return an object and this object is going to represent which properties
are attached to the props of this component. So then we can access them 
inside this comopnent.  
*/
const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

/* Vi slänger in mapStateToProps som parameter till connect så connectfunktionen
vet vad den ska connecta till, vilken data den ska hämta från store. Vi mappar det 
till våran props objekt här inne (this.props). Så nu har vi tillgång till 
props.todo i denna component och vi får datan. 
*/
export default connect(mapStateToProps)(TodoPage);
