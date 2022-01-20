import styled, { css } from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { theme } from "./theme";
import { Link } from "react-router-dom";

export const TabList = styled.ul`
  list-style: none;
  padding: 20px 0;
  background-color: ${theme.colors.primary};
  display: grid;
  row-gap: 40px;
  column-gap: 20px;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 270px);
`;

export const TabItem = styled(Link)`
  text-decoration: none;
  color: black;
  display: grid;
  grid-template-rows: 390px auto;
  grid-gap: 20px;
  transition: 0.4s ease;
  cursor: pointer;
  :hover {
    div {
      -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.69);
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.69);
    }
  }
`;

export const TabBG = styled.div`
  background: url(${(props) => props.img}) center center no-repeat;
  ${(props) =>
    props.img
      ? css`
          background: url(props => props.img) center center no-repeat;
          background-size: cover;
        `
      : css`
          background: url("./img/no-image.png") center center no-repeat;
          background-size: contain;
        `}
  transition: 0.3s ease;
  display: grid;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
`;

export const MovieInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  overflow: hidden;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  justify-items: flex-start;
  transition: 0.5s ease;
  align-content: flex-start;
  transform: translateY(100%);
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  background-color: white;
  color: black;
  height: 30px;
  width: 30px;
  position: absolute;
  padding: 4px;
  top: 0;
  right: 0;
  border-radius: 0 0 0 5px;
  z-index: 1;
  :hover {
    + div {
      transform: translateY(0);
    }
  }
`;

export const NoResultsContainer = styled.div`
  padding: 20px 0;
`;
