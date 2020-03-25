import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions";

class Header extends Component {
  handleClickMe = () => console.clear();

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;
    return (
      <header style={headerStyle}>
        <h1 align="center">
          <Link style={linkStyle} to="/">
            Boyner
          </Link>
        </h1>
        <button style={linkStyle} onClick={this.handleClickMe}>
          x
        </button>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/contactus">
          Contact us
        </Link>{" "}
        | <Link style={linkStyle}>Members</Link> |{" "}
        <Link style={linkStyle}>The tree</Link> |{" "}
        <Link style={linkStyle}>Numbers game</Link> |{" "}
        <Link style={linkStyle} to="/links">
          Links
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/olandsbron">
          Ölandsbron
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/todopage">
          To-do list
        </Link>
        <input
          type="submit"
          value="Logout"
          className="btn"
          style={btnStyle}
          onClick={this.handleLogout}
        ></input>
        {/* <SignedInLinks /> */}
      </header>
    );
  }
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  fontSize: "20px"
};

const btnStyle = {
  float: "right",
  borderRadius: "5%"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  textAlign: "center"
};

// const btnStyle = {
//   color: "#fff",
//   backgroundColor: "grey",
//   float: "right"
// };

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}
export default connect(mapStateToProps)(Header);
