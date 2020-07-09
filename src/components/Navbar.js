import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isToggleRes: false
  };

  handleToggle = () => {
    this.setState({
      isToggleRes: !this.state.isToggleRes
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <div className="logo">Beach Resort</div>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <span className="nav-icon">|||</span>
            </button>
          </div>
          <ul
            className={
              this.state.isToggleRes ? "nav-links nav-show" : "nav-links"
            }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
