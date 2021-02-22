import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
const SearchBar = () => {
  //const [textInput, setTextInput] = useState("");
  const { textSearch, setTextSearch, searchSubmit } = useContext(SearchContext);
  return (
    <>
      {/* <div> ANS : {textInput} </div> */}
      <form
        className="w-10/12 md:w-7/12 mx-auto pb-1 border-blue-400 border-b-2 "
        onSubmit={searchSubmit}
      >
        <input
          className="w-full focus:outline-none  text-center"
          type="text"
          value={textSearch}
          onChange={(event) => setTextSearch(event.target.value)}
          onFocus={(event) => event.target.select()}
        />
      </form>
    </>
  );
};
export default SearchBar;
