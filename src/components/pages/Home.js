import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Notifications from "../layout/Notifications";
import ProjectList from "../projects/ProjectList";
import { firestoreConnect } from "react-redux-firebase";

class Home extends Component {
  // checkParent = (parent, child) => {
  //   if (parent.contains(child)) return true;
  //   return false;
  // };

  render() {
    return (
      <Router>
        <div align="center">
          <Route exact path="/">
            {/*  render={props => (
                <React.Fragment>
                  <Components/>
                  <Components/>
                  <Components/>
                </React.Fragment>
              )}*/}
            <h1>Welcome to the offical website of the Boyner family</h1>
            <p></p>
          </Route>
        </div>

        <div className="col s12 m6">
          <ProjectList />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </Router>
    );
  }
}

export default Home;
