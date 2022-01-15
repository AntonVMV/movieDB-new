import { ContainerL } from "../../styles/containers";
import * as NavStyle from "../../styles/navigation";
import { useState } from "react";

const tabs = ["Latest", "Top Rated", "Upcoming", "Discover"];

export const Navigation = () => {
  const [coords, setCoords] = useState(null);
  const [active, setActive] = useState(null);

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
      <NavStyle.NavList>
        {tabs.map((item, index) => {
          return (
            <NavStyle.NavListEl
              key={index}
              onMouseEnter={(e) => getCoords(e.currentTarget)}
              onMouseLeave={() => setCoords(null)}
              onClick={() => setActive(item)}
              isActive={active === item ? true : false}
            >
              <NavStyle.NavLinkStyled
                to={item === "Latest" ? "/" : item.split(" ").join("")}
              >
                {item}
              </NavStyle.NavLinkStyled>
            </NavStyle.NavListEl>
          );
        })}
        <NavStyle.LinkBg coords={coords} />
      </NavStyle.NavList>
    </ContainerL>
  );
};
