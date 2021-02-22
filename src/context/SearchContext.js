import React, { useState } from "react";
const SearchContext = React.createContext();

const SearchContextProvider = (props) => {
  const [textSearch, setTextSearch] = useState("");

  return (
    <SearchContext.Provider value={{ textSearch, setTextSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
