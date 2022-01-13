import { ContainerL } from "../../styles/containers";
import * as NavStyle from "../../styles/navigation";
import { useState, useRef } from "react";

const tabs = ["Latest", "Top Rated", "Upcoming", "Discover"];

export const Navigation = () => {
  const [coords, setCoords] = useState(null);
  const container = useRef();

  const getCoords = (el) => {
    const { left, top, width } = el.getBoundingClientRect();
    setCoords({
      x: left + window.pageXOffset,
      y: top + window.pageYOffset,
      width,
    });
  };

  return (
    <ContainerL>
      <NavStyle.NavList ref={container}>
        {tabs.map((item, index) => {
          return (
            <li
              key={index}
              onMouseEnter={(e) => getCoords(e.currentTarget)}
              onMouseLeave={() => setCoords(null)}
            >
              <NavStyle.NavLinkStyled
                to={item === "Latest" ? "/" : item.split(" ").join("")}
              >
                {item}
              </NavStyle.NavLinkStyled>
            </li>
          );
        })}
        <NavStyle.LinkBg coords={coords} />
      </NavStyle.NavList>
    </ContainerL>
  );
};
