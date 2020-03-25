const initState = {
  todos: [
    {
      id: "1",
      title: "Clean the room fam",
      completed: false
    },
    {
      id: "2",
      title: "Check out the discs",
      completed: false
    },
    {
      id: "3",
      title: "Visit coz in jail",
      completed: false
    }
  ]
};
/*We want to take in the action type here. But we need to detect what type
of action it is.  */

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      console.log("created todo fam", action.todo);
      return state;
    case "CREATE_TODO_ERROR":
      console.log("create todo error", action.err);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
