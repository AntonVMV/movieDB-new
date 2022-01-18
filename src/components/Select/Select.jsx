import { useState, useRef, useEffect } from "react";
import {
  SelectContainer,
  SelectDropdown,
  SelectField,
  SelectItem,
  SelectArrowIcon,
} from "../../styles/components";
import { MedText } from "../../styles/text";
import { useQueryParams } from "../../hook/useQueryParams";

export const Select = ({ active, options, label, query }) => {
  const [open, toggleOpen] = useState(false);

  const [_, setSearch] = useQueryParams(query);

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
      <SelectField onClick={() => toggleOpen(!open)}>
        <MedText>{active || label}</MedText>
        <SelectArrowIcon open={open} size="1.5em" />
        <SelectDropdown isOpen={open}>
          {options &&
            options.map((item, index) => {
              return (
                <SelectItem key={index} onClick={() => setSearch(item.id)}>
                  {item.name}
                </SelectItem>
              );
            })}
        </SelectDropdown>
      </SelectField>
    </SelectContainer>
  );
};
