import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions";
import Header from "../layout/Header";
import About from "./About";
import ContactUs from "./ContactUs";
import Links from "./Links";
import Olandsbron from "./NileCity";
import TodoPage from "./TodoPage";
import Notifications from "../layout/Notifications";
import ProjectList from "../projects/ProjectList";
import ProjectDetails from "../projects/ProjectDetails";

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
