import styled, { css } from "styled-components";
import { theme } from "./theme";
import { NavLink } from "react-router-dom";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  text-transform: uppercase;
  font-size: ${theme.text.medium.fontSize}px;
  li {
    padding: 10px;
  }
  :hover {
    opacity: 1;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
`;

export const LinkBg = styled.div`
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  transition: 0.3s ease;
  z-index: -1;
  border-radius: 5px;
  ${(props) =>
    props.coords
      ? css`
          width: ${(props) => props.coords.width}px;
          top: ${(props) => props.coords.y}px;
          left: ${(props) => props.coords.x}px;
        `
      : null};
`;
