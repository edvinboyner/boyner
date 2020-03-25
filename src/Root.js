/*
This component is going to provide our store to App. We're also going to
initialize react-router here as well. We'll be adding the actual routes to App.
*/
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import configureStore from "./store/configureStore";

// Root handles some kind of configureStore
const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}
export default Root;

//Provider Surronds our app in order to pass the store into our application
//so that the application has access to the store.

/* 

Most apps use more than one middleware, and each middleware often requires some initial setup. The extra noise added to the index.js can quickly make it hard to maintain, because the logic is not cleanly organised.

#The solution: configureStore
The solution to this problem is to create a new configureStore function which encapsulates our store creation logic, which can then be located in its own file to ease extensibility.
*/
