import { useState, useRef, useEffect } from "react";
import {
  SelectContainer,
  SelectDropdown,
  SelectField,
} from "../../styles/components";
import { SmallText, MedText } from "../../styles/text";

export const Select = ({ onChange, options, label }) => {
  const [open, toggleOpen] = useState(false);
  const [field, setField] = useState("-choose-");

  const rootEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (rootEl.current && !rootEl.current.contains(e.target)) {
        toggleOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const changeHandler = (item) => {
    setField(item.name);
    onChange(item.id);
  };

  return (
    <SelectContainer ref={rootEl}>
      <SmallText>{label}</SmallText>
      <SelectField onClick={() => toggleOpen(!open)}>
        <MedText>{field}</MedText>
        <SelectDropdown isOpen={open}>
          {options.map((item, index) => {
            return (
              <p key={index} onClick={() => changeHandler(item)}>
                {item.name}
              </p>
            );
          })}
        </SelectDropdown>
      </SelectField>
    </SelectContainer>
  );
};
