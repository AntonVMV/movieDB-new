import {
  SearchInput,
  SearchButton,
  EnterButton,
} from "../../styles/components";
import { useState, useRef, useEffect } from "react";
import { AiOutlineSearch, AiOutlineEnter } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const SearchElement = ({ isActive, setActive }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  /*Closing input on outside click*/
  const textInput = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      if (textInput.current && !textInput.current.contains(e.target)) {
        closeInput();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const closeInput = (e) => {
    setInputValue("");
    setActive(false);
  };

  const submitHandler = () => {
    if (!inputValue) {
      return;
    }
    navigate({ pathname: "Search", search: "for=" + inputValue });
    closeInput();
  };

  return (
    <SearchInput isActive={isActive} ref={textInput}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? submitHandler() : null)}
      />
      <SearchButton isShow={isActive} onClick={() => setActive(true)}>
        <AiOutlineSearch className="searh-icon" />
      </SearchButton>
      {inputValue && (
        <EnterButton
          to={{ pathname: "Search", search: "for=" + inputValue }}
          onClick={submitHandler}
        >
          <AiOutlineEnter />
        </EnterButton>
      )}
    </SearchInput>
  );
};
