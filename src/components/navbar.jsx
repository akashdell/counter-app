import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          There are
          <span className="badge badge-pill  badge-success">
            {this.props.totalCounters}
          </span>
          Items in Cart.
        </a>
      </nav>
    );
  }
}

export default NavBar;
