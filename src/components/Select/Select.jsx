import { useState, useRef, useEffect } from "react";
import {
  SelectContainer,
  SelectDropdown,
  SelectField,
  SelectItem,
  SelectArrowIcon,
} from "../../styles/components";
import { SmallText, MedText } from "../../styles/text";

export const Select = ({ active, onChange, options, label }) => {
  const [open, toggleOpen] = useState(false);

  /*Closing dropdown on outside click*/

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

  return (
    <SelectContainer ref={rootEl}>
      <SmallText>{label}</SmallText>
      <SelectField onClick={() => toggleOpen(!open)}>
        <MedText>{active || "-choose-"}</MedText>
        <SelectArrowIcon open={open} size="1.5em" />
        <SelectDropdown isOpen={open}>
          {options &&
            options.map((item, index) => {
              return (
                <SelectItem key={index} onClick={() => onChange(item.id)}>
                  {item.name}
                </SelectItem>
              );
            })}
        </SelectDropdown>
      </SelectField>
    </SelectContainer>
  );
};
