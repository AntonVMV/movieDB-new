import styled from "styled-components";

export const TabList = styled.ul`
  list-style: none;
  padding: 20px;
  background-color: white;
  display: grid;
  row-gap: 40px;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 300px);
`;

export const TabItem = styled.li`
  height: 450px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: contain;
  -webkit-box-shadow: 0px 7px 12px 4px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 7px 12px 4px rgba(0, 0, 0, 0.48);
  transition: 0.4s ease;
  overflow: hidden;
  :hover {
    -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.48);
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.48);
    div {
      transform: translateY(0);
    }
  }
`;

export const TabInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  overflow: hidden;
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  justify-items: flex-start;
  transition: 0.5s ease;
  transform: translateY(100%);
`;
