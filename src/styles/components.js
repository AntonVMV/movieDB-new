import styled from "styled-components";
import { theme } from "./theme";
import { ContainerL } from "./containers";

//========== search-input ================//

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    position: absolute;
    height: 30px;
    border-radius: 30px;
    width: ${(props) => (props.isActive ? `300px` : `30px`)};
    border: none;
    padding: ${(props) => (props.isActive ? `0 30px 0 20px` : `0px`)};
    right: 0;
    transition: 0.3s ease;

    :focus {
      outline: none;
    }
  }

  button {
    color: black;
    background-color: white;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
    z-index: 2;
    border: none;
    transition: 0.3s ease;
    :hover {
      -webkit-box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.6);
      box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.6);
    }
    :focus {
      outline: none;
    }

    .searh-icon {
      width: 20px;
      height: 20px;
    }
  }
`;

/*=================Button-OK=================*/

export const ButtonOk = styled.button`
  color: ${theme.colors.text};
  background-color: ${theme.colors.primary};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.3s ease;
  font-size: ${theme.text.medium.fontSize}px;
  :hover {
    background-color: #e6e6e6;
  }
  :active {
    background-color: #cfcfcf;
  }
`;

/*********SELECT***************/

export const FiltersContainer = styled(ContainerL)`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    justify-items: flex-start;
    row-gap: 20px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 769px) {
    display: grid;
    grid-template-columns: 70px 1fr;
  }
`;

export const SelectField = styled.div`
  background-color: lightgrey;
  padding: 5px 20px;
  margin-left: 10px;
  position: relative;
  cursor: pointer;
`;

export const SelectDropdown = styled.div`
  max-height: 200px;
  overflow-y: scroll;
  position: absolute;
  background-color: lightblue;
  z-index: 2;
  top: 40px;
  right: 0;
  padding: 0 10px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  transition: 0.3s ease;
`;

/************PAGINATION**************/

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PaginationElement = styled.p`
  padding: 10px 15px;
  background-color: ${(props) => (props.isPage ? "lightgray" : "transparent")};
  margin: 10px;
  cursor: ${(props) => (props.isPage ? "pointer" : "auto")}; ;
`;
