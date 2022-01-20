import styled from "styled-components";
import { TabBG } from "./tab";

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 300px;
  grid-gap: 50px;
  margin: 15px 0;
  @media screen and (max-width: 1300px) {
    grid-template-columns: auto 1fr;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;

export const Information = styled.ul`
  list-style: none;
  display: grid;
  align-items: flex-end;
  row-gap: 5px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const PosterImg = styled(TabBG)`
  width: 250px;
  height: 380px;
  @media screen and (max-width: 760px) {
    justify-self: center;
  }
`;

export const InformationItem = styled.li`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 70px auto;
  align-items: flex-end;
`;

export const AboutItem = styled.div`
  padding: 10px 0 0;
  display: grid;
  row-gap: 10px;
`;

export const SideContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 10px 20px;
  row-gap: 10px;
  background-color: #fff;
  border-radius: 10px;
  max-height: 380px;
  @media screen and (max-width: 1300px) {
    grid-column: 1 / 3;
  }
  @media screen and (max-width: 760px) {
    grid-column: 1;
  }
`;

export const VideoContainer = styled.div`
  overflow-y: auto;
  display: grid;
  row-gap: 10px;
  ::-webkit-scrollbar {
    width: 7px;
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
  img {
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 1300px) {
    display: flex;
    img {
      width: 300px;
    }
    ::-webkit-scrollbar {
      height: 5px;
      background-color: transparent;
    }
  }
`;

/*Actor Cards*/

export const CastContainer = styled.div`
  padding: 20px 0;
`;

export const ActorsContainer = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  display: flex;
  overflow-x: auto;
  background-color: #e8e8e8;
  ::-webkit-scrollbar {
    height: 7px;
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

export const ActorCard = styled.div`
  padding: 0 10px;
  display: grid;
  p {
    max-width: 100px;
  }
`;

export const ActorImg = styled(TabBG)`
  width: 100px;
  height: 150px;
`;
