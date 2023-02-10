import React, {useState} from "react";
import DarkContext from "./DarkContext";

const DarkState = props => {
  const state = {
    darkTheme: true,
  };

  const [theme, setTheme] = useState(state);

  const switchTheme = () => {
    if (theme.darkTheme === true) {
      setTheme({
        darkTheme: false,
      });
    } else {
      setTheme({
        darkTheme: true,
      });
    }
  };

  return (
    <DarkContext.Provider value={{theme, switchTheme}}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
