import React, {useContext} from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import DarkContext from "./context/DarkContext";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/About";
import Card from "./components/Card";

const App = () => {
  const dark = useContext(DarkContext);
  const handleClick = () => {
    dark.switchTheme();
    console.log("The theme has changed.");
  };

  return (
    <Router>
      <Navbar click={handleClick} obj={dark} />
      <Switch>
        <Route exact path="/">
          <Home click={handleClick} obj={dark} />
          <div className="container">
            <Card
              click={handleClick}
              obj={dark}
              title="Switch Theme"
              desc="Click the Switch Theme Button to switch theme from light to dark or vice-versa"
              button="Switch Theme"
            />
          </div>
        </Route>

        <Route path="/about">
          <About click={handleClick} obj={dark} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
