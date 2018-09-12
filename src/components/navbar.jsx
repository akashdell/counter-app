import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        There are
        <span className="badge badge-pill  badge-success">{totalCounters}</span>
        Items in Cart.
      </a>
    </nav>
  );
};

export default NavBar;
