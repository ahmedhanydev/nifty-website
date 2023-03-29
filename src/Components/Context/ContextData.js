import React, { useState } from "react";

const { createContext } = require("react");
export let DataContext = createContext([]);

export function DataContextProvider(props) {
  const [showMenu, setShowMenu] = useState(false);

  //   const openMenu = (value) => {
  //     setShowMenu(value);
  //   };
  return (
    <DataContext.Provider value={{ showMenu, setShowMenu }}>
      {props.children}
    </DataContext.Provider>
  );
}
