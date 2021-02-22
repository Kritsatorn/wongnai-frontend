import React, { useState } from "react";
const SearchContext = React.createContext();

const SearchContextProvider = (props) => {
  const [textSearch, setTextSearch] = useState("");

  const addText = (text) => {
    setTextSearch((prevText) => (prevText ? prevText + " " + text : text));
  };

  return (
    <SearchContext.Provider value={{ textSearch, setTextSearch, addText }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
