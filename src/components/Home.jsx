import React from "react";

const Home = props => {
  return (
    <>
      <div
        className={`p-5 mb-4 bg-light rounded-3 bg-${
          props.obj.theme.darkTheme === false ? "light" : "dark"
        }`}
      >
        <div className="container-fluid py-5">
          <h1
            className={`display-5 fw-bold text-${
              props.obj.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            Darkight
          </h1>
          <p
            className={`col-md-8 fs-4 text text-${
              props.obj.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            Click the Switch Theme button to switch from dark theme to light
            theme or vice-versa.
          </p>
          <button
            onClick={props.click}
            className={`btn btn-lg btn-${
              props.obj.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            {props.obj.theme.darkTheme === false ? "Dark Theme" : "Light Theme"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
