import React, { Component } from "react";
import ReactPlayer from "react-player";

class NileCity extends Component {
  render() {
    return (
      <div align="center" style={{ backgroundColor: "black" }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=F5y2sbD41IQ&t=25"
          playing
        />
      </div>
    );
  }
}

export default NileCity;
