import { ContainerL } from "../../styles/containers";
import * as NavStyle from "../../styles/navigation";
import { useState, useRef, useEffect } from "react";

const tabs = ["Latest", "Top Rated", "Upcoming"];

export const Navigation = () => {
  const [active, setActive] = useState([]);
  const container = useRef();

  const test = () => {
    [...container.current.children].forEach((item) => {
      if ([...item.children[0].classList].includes("active")) {
        getCoords(item);
      }
    });
  };

  useEffect(() => {
    test();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", test);
    return () => window.removeEventListener("resize", test);
  }, []);

  const getCoords = (el) => {
    const { left, bottom, width } = el.getBoundingClientRect();
    setActive({
      x: left + window.pageXOffset,
      y: bottom + window.pageYOffset,
      width,
    });
  };

  return (
    <ContainerL>
      <NavStyle.NavList active={active} ref={container}>
        {tabs.map((item, index) => {
          return (
            <li key={index} onClick={(e) => getCoords(e.currentTarget)}>
              <NavStyle.NavLinkStyled
                to={item === "Latest" ? "/" : item.split(" ").join("")}
              >
                {item}
              </NavStyle.NavLinkStyled>
            </li>
          );
        })}
      </NavStyle.NavList>
    </ContainerL>
  );
};
