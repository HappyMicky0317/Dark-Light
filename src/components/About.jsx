import React from "react";
import {Link} from "react-router-dom";

const About = props => {
  return (
    <div>
      <main
        className={`container mt-5 bg-${
          props.obj.theme.darkTheme === false ? "light" : "dark"
        } border-5 py-3 px-5 pb-5 rounded`}
      >
        <h1 className="text-primary mt-5">About Darkight</h1>
        <p
          className={`fs-5 col-md-8 text-${
            props.obj.theme.darkTheme === false ? "dark" : "light"
          }`}
        >
          Darkight is a practice project for understanding the uses of
          useContext hook in ReactJs. You can go to the Home Page to switch
          theme and watch useContext hook in action. Now, this is some random
          text to make the content larger.
        </p>

        <div className="mb-5">
          <Link to="/" className="btn btn-primary btn-lg px-4">
            Home
          </Link>
        </div>

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-6">
            <h2
              className={`text-${
                props.obj.theme.darkTheme === false ? "dark" : "light"
              }`}
            >
              Features
            </h2>
            <p
              className={`text-${
                props.obj.theme.darkTheme === false ? "dark" : "light"
              }`}
            >
              Go to the home page and switch theme to see the featureds of
              Darkight in action. Or simply switch the theme using the button in
              the navigation bar.
            </p>
          </div>

          <div className="col-md-6">
            <h2
              className={`text-${
                props.obj.theme.darkTheme === false ? "dark" : "light"
              }`}
            >
              Framework Used
            </h2>
            <p
              className={`text-${
                props.obj.theme.darkTheme === false ? "dark" : "light"
              }`}
            >
              The framework used to build this awesome website is ReactJs and
              Bootstrap.
            </p>
            <button
              onClick={props.click}
              className={`btn btn-lg btn-${
                props.obj.theme.darkTheme === false ? "dark" : "light"
              }`}
            >
              {props.obj.theme.darkTheme === false
                ? "Dark Theme"
                : "Light Theme"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
