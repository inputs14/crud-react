import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <h2 className="navbar-brand">React - CRUD</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/crud-react/">
                <h4 className="nav-link">Posts</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/crud-react/add">
                <h4 className="nav-link">Add</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/crud-react/">
                <h4 className="nav-link">Sort</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
