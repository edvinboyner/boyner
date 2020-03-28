/* Usually we do this like in auth where we do something like this:

export const createTodo = todo => {
  return {
    type: "ADD_PROJECT",
    project: project
  };
};


But with thunk we can do something else instead!

*/

import { firestore } from "firebase";

/* dispatch: dispatches an action to the reducer 
So what we are doing here: 
When we first call an action creator inside a dispatch method from our 
component we're returning a function and we're halting that dispatch
because we're not returning an action anymore; just a function.

*/

// We are pausing the dispatch
export const createTodo = todo => {
  return (dispatch, getState, { getFirestore }) => {
    // We'll make async call to the database

    const fireStore = getFirestore(); //This gives us a reference to our firestore database
    // console.log("Inside todoActions createTodo- todo: ", todo);
    fireStore
      .collection("todos")
      .add({
        ...todo,

        completed: false
      })
      .then(() => {
        // When we done /\ we carry on with the dispatch: (.then() makes sure we are done b4 doing this \/)
        dispatch({ type: "CREATE_TODO", todo: todo });
      })
      .catch(err => {
        dispatch({ type: "CREATE_TODO_ERROR", err });
      });
  };
};
export default createTodo;

export const deleteTodo = todo => {
  return (dispatch, getState, { getFirestore }) => {
    // We'll make async call to the database

    const fireStore = getFirestore(); //This gives us a reference to our firestore database
    // console.log("Inside todoActions deleteTodo- todo: ", todo);
    fireStore
      .collection("todos")
      .doc(todo)
      .delete()
      .then(() => {
        // When we done /\ we carry on with the dispatch: (.then() makes sure we are done b4 doing this \/)
        dispatch({ type: "DELETE_TODO", todo: todo });
      })
      .catch(err => {
        dispatch({ type: "DELETE_TODO_ERROR", err });
      });
  };
};

export const toggleTodo = todo => {
  return (dispatch, getState, { getFirestore }) => {
    // We'll make async call to the database
    // console.log("Now we are inside ToggleTodo ", this.props);
    const fireStore = getFirestore(); //This gives us a reference to our firestore database
    // console.log("Inside todoActions toggleTodo- todo: ", todo);
    const doc = fireStore.get({ collection: "todos" });

    //

    fireStore
      .collection("todos")
      .doc(todo)
      .get()
      .then(doc => {
        fireStore
          .collection("todos")
          .doc(todo)
          .update({ completed: !doc.data().completed });
        dispatch({ type: "TOGGLE_TODO", todo: todo });
      })
      .catch(err => {
        dispatch({ type: "TOGGLE_TODO_ERROR", err });
      });
  };
};
/* AddTodo --> skickar state --> todoActions --> dispatchar och tas emot --> todoReducer(kollar vad för action.type o gör något sjukt */
