import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DarkState from "./context/DarkState";

ReactDOM.render(
  <DarkState>
    <App />
  </DarkState>,
  document.getElementById("root")
);
