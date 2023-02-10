import React from "react";

const Card = props => {
  return (
    <>
      <div
        className={`card w-25 m3 p-2 bg-${
          props.obj.theme.darkTheme === false ? "light" : "dark"
        }`}
      >
        <div className="card-body">
          <h5
            className={`card-title text-${
              props.obj.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            {props.title}
          </h5>
          <p
            className={`card-text text-${
              props.obj.theme.darkTheme === false ? "dark" : "light"
            }`}
          >
            {props.desc}
          </p>
          <button
            type="button"
            onClick={props.click}
            className="btn btn-primary"
          >
            {props.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
