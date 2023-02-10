import React from "react";
import {Link} from "react-router-dom";

const Navbar = props => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.obj.theme.darkTheme === false ? "light" : "dark"
        } bg-${props.obj.theme.darkTheme === false ? "light" : "dark"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Darkight
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <button
            onClick={props.click}
            className={`btn btn-${
              props.obj.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            {props.obj.theme.darkTheme === false ? "Dark Theme" : "Light Theme"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
