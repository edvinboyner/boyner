import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/pages/Home";
import Header from "./components/layout/Header";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Links from "./components/pages/Links";
import Olandsbron from "./components/pages/NileCity";
import TodoPage from "./components/pages/TodoPage";
import ProjectDetails from "./components/projects/ProjectDetails";
import ProjectList from "./components/projects/ProjectList";

function App(props) {
  // console.log("Props: ", props);
  const { isAuthenticated, isVerifying } = props;
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Home} // Här skickas vi till Home efter Login
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route path="/login" component={Login} />
        <div>
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/links" component={Links} />
          <Route path="/olandsbron" component={Olandsbron} />
          <Route path="/todopage" component={TodoPage} />
          <Route path="/project/:id" component={ProjectDetails} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);
