import React, { Component } from "react";
import { Link } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <Link style={linkStyle} to="/">
          New Project
        </Link>
      </li>
      <li>
        <Link
          style={linkStyle}
          to="/"
          className="bnt btn-floating pink lighten-1"
        >
          NN
        </Link>
      </li>
    </ul>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  textAlign: "center"
};

export default SignedInLinks;
