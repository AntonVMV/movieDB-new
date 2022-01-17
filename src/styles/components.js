import styled, { css, keyframes } from "styled-components";
import { theme } from "./theme";
import { ContainerL } from "./containers";
import { RiArrowDropDownLine } from "react-icons/ri";

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

/***********SELECT***************/

export const FiltersContainer = styled(ContainerL)`
  padding: 20px 0;
  display: grid;
  grid-gap: 20px;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 220px);
`;

export const SelectContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(50px, auto) 1fr;
`;

export const SelectField = styled.div`
  background-color: #e8e8e8;
  padding: 5px 20px;
  border-radius: 6px;
  margin-left: 10px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectDropdown = styled.div`
  width: 100%;
  overflow: auto;
  position: absolute;
  background-color: #e8e8e8;
  top: 36px;
  right: 0;
  max-height: 200px;
  border-radius: 6px;
  opacity: 0;

  ${(props) =>
    props.isOpen
      ? css`
          animation: ${appear} 0.2s forwards linear;
        `
      : null};
  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #8f8f8f;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
  }
`;

const appear = keyframes`
  0%{
    transform: scale(90%);
    opacity: 0;
    z-index: 2;
  }
  100%{
    transform: scale(100%);
    opacity: 1;
    z-index: 2;
  }
`;

export const SelectItem = styled.p`
  transition: 0.2s ease;
  padding: 10px;
  :hover {
    background-color: #d4d4d4;
  }
`;

export const SelectArrowIcon = styled(RiArrowDropDownLine)`
  transition: 0.2s linear;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

/************PAGINATION**************/

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PaginationElement = styled.p`
  padding: 10px 0;
  min-width: 40px;
  text-align: center;
  transition: 0.1s ease;
  background-color: ${(props) => (props.isActive ? "#bdbdbd" : "transparent")};
  ${(props) =>
    props.isPage
      ? css`
          cursor: pointer;
          border: 1px solid #e8e8e8;
          :hover {
            background-color: #e8e8e8;
          }
        `
      : null}
  margin: 10px;
  border-radius: 6px;
`;
