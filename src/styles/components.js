import styled from "styled-components";

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
  }
`;

/*=================Button-OK=================*/

export const ButtonOk = styled.button`
  color: white;
  background-color: #3a577e;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.3s ease;
  :hover {
    -webkit-box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.57);
    box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.57);
  }
  :active {
    background-color: #2a3e5a;
  }
`;
