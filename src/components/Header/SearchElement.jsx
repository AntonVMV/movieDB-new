import { SearchInput } from "../../styles/components";
import { useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchElement = () => {
  let [isActive, setActive] = useState(false);
  let [inputValue, setInputValue] = useState("");

  const textInput = useRef(null);

  const searchHandler = () => {
    if (inputValue) {
      submitHandler();
      return;
    }
    setActive(!isActive);
    textInput.current.focus();
  };

  const closeInput = (e) => {
    setInputValue("");
    setActive(false);
  };

  const submitHandler = () => {
    console.log(inputValue);
  };

  const helper = (e) => {
    e.preventDefault();
  };

  return (
    <SearchInput isActive={isActive}>
      <input
        type="text"
        ref={textInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? submitHandler() : null)}
        onBlur={closeInput}
      />
      <button onClick={searchHandler} onMouseDown={helper}>
        <AiOutlineSearch size="1.5em" />
      </button>
    </SearchInput>
  );
};
