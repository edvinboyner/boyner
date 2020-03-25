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
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // We'll make async call to the database

    const fireStore = getFirestore(); //This gives us a reference to our firestore database
    firestore
      .CollectionReference("todos")
      .add({
        ...todo
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

/* AddTodo --> skickar state --> todoActions --> dispatchar och tas emot --> todoReducer(kollar vad för action.type o gör något sjukt */

export default createTodo;
