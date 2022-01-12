import styled from "styled-components";
import { theme } from "./theme";
import { NavLink } from "react-router-dom";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 20px;
  padding: 20px;
  text-transform: uppercase;
  font-size: ${theme.text.medium.fontSize}px;

  ::before {
    content: "";
    width: ${(props) => props.active.width}px;
    height: 3px;
    background-color: white;
    position: absolute;
    top: ${(props) => props.active.y}px;
    left: ${(props) => props.active.x}px;
    transition: 0.3s ease;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
  :hover {
    color: grey;
  }
`;
