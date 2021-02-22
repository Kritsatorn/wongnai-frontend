import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
const SearchContext = React.createContext();
const APIpath = "http://localhost:3001/api/trips";

const SearchContextProvider = (props) => {
  const [textSearch, setTextSearch] = useState("");
  const [tripData, setTripData] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const addText = (text) => {
    setTextSearch((prevText) => (prevText ? prevText + " " + text : text));
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
  }, []);

  useEffect(() => {
    console.log("search : ", textSearch);
  }, [textSearch]);

  return (
    <SearchContext.Provider
      value={{ textSearch, setTextSearch, addText, searchSubmit, tripData }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
