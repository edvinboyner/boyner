import React, { Component } from "react";
import { connect } from "react-redux";
import createTodo from "../../store/actions/todoActions";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    // this is gonna pass this.state to the createTodo in the bottom of this component

    this.props.createTodo(this.state);

    // this.props.addTodo(this.state.title);
    // this.setState({ title: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px " }}
          placeholder="Add a to do..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit" // name="Submit" blir skicka, BUT WHY`??`
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

/*
What happens here is that when we call props.createTodo and passing a todo
its gonna run this function take in that todo perform a dispatch and its gonna
call this action creator right here in which we imported at the top. 
That is going to return the function in "todoActions". 
*/
const mapDispatchToProps = dispatch => {
  return {
    createTodo: todo => dispatch(createTodo(todo))
  };
};
// The first parameter of the connect() function is:
// mapStateToProps, so we just say null and then pass mapDispatchToProps
// as 2nd parameter.
export default connect(null, mapDispatchToProps)(AddTodo);
