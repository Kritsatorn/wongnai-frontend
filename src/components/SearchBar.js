import { useState } from "react";
const SearchBar = () => {
  const [textInput, setTextInput] = useState("");
  return (
    <>
      {/* <div> ANS : {textInput} </div> */}
      <form className=" w-7/12 mx-auto pb-1 border-blue-400 border-b-2 ">
        <input
          className="w-full focus:outline-none  text-center"
          type="text"
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
        />
      </form>
    </>
  );
};
export default SearchBar;
