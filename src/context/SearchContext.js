import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
const SearchContext = React.createContext();
const APIpath = "http://localhost:3001/api/trips";

const SearchContextProvider = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [textSearch, setTextSearch] = useState(
    location.search ? location.search.substr(9) : ""
  );
  const [tripData, setTripData] = useState(null);
  const inputRef = useRef(null);

  const addText = (text) => {
    setTextSearch((prevText) => (prevText ? prevText + " " + text : text));
    inputRef.current.focus();
  };

  const searchSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    history.push({
      pathname: "/",
      search: `?keyword=${textSearch}`,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${APIpath}${location.search}`);
        console.log("data ", res.data);
        setTripData(res.data.data);
      } catch (err) {
        console.log("fetch error ", err);
      }
    };
    console.log("locaotion ", location);
    fetchData();
  }, [location]);

  useEffect(() => {
    console.log("search : ", textSearch);
  }, [textSearch]);

  return (
    <SearchContext.Provider
      value={{
        textSearch,
        setTextSearch,
        addText,
        searchSubmit,
        tripData,
        inputRef,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
