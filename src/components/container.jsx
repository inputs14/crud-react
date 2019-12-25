import React, { Component } from "react";
import Posts from "./posts";

class Container extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <Posts />
      </div>
    );
  }
}

export default Container;
