/* This file is going to initialize our store, 
setup our thunk middleware, call our verifyAuth() action, 
and export our function so we can provide it to the root of our app.  */

import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./actions";
import rootReducer from "./reducers/rootReducer";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "../firebase/firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
/* This function will be called every time our app starts up, which also
happens when the user refreshes the page. I like to dispatch verifyAuth()
here because it ensures it will be the first thing that happens to our 
redux store, and if a user session exists it will authenicate our user
before the rest of the app loads which will let us route to our secure
route without our login page showing.
*/
export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    /* this could take in a list of middleware.
    it turns into a store enhancer so we could add many different middlewares
    inside here and we could also have many different store enhancers here.
    And they enhance the store functionality. 
    We have now applied this tunkMiddleware which is now enchancing our
    store with extra functionality, that functionality now being that we 
    can return a function inside our action creators which can then
    interact with a database. 
    */
    compose(
      applyMiddleware(
        thunkMiddleware.withExtraArgument({ getFirebase, getFirestore })
      ),
      reduxFirestore(firebase),
      reactReduxFirebase(firebase)
    )
  );
  store.dispatch(verifyAuth());
  return store;
}

/* 
Extending Redux functionality
Most apps extend the functionality of their Redux store by adding middleware or store enhancers (note: middleware is common, enhancers are less common). Middleware adds extra functionality to the Redux dispatch function; enhancers add extra functionality to the Redux store.

We will add two middlewares and one enhancer:

The redux-thunk middleware, which allows simple asynchronous use of dispatch.
A middleware which logs dispatched actions and the resulting new state.
An enhancer which logs the time taken for the reducers to process each action.

Middleware is comde that runs between A and B. 
This is useful for async calls so we dont return 
something fast as fuck before a method has done his thing
*/
