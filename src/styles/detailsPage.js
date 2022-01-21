import styled from "styled-components";
import { TabBG } from "./tab";
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const BlockContainer = styled.div`
  padding: 15px 0;
`;

export const InfoContainer = styled(BlockContainer)`
  display: grid;
  grid-template-columns: auto 1fr 300px;
  grid-gap: 50px;
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

export const AboutItem = styled(BlockContainer)`
  display: grid;
  row-gap: 10px;
`;

/*Trailers Container*/

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
  display: flex;
  padding: 0 10px;
  flex-direction: column;
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
  @media screen and (max-width: 1300px) {
    flex-direction: row;
    ::-webkit-scrollbar {
      height: 5px;
      background-color: transparent;
    }
  }
`;

export const TrailerImage = styled.div`
  background: ${(props) => `url(${props.url}) center center no-repeat`};
  min-height: 150px;
  background-size: cover;
  width: 100%;
  margin: 10px 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1300px) {
    min-width: 220px;
    margin: 0 10px;
  }
`;

export const PlayImg = styled(BsPlayCircle)`
  width: 100%;
  height: 100%;
  padding: 70px;
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: 0.3s ease;
  :hover {
    opacity: 1;
  }
`;

/*Actor Cards*/

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

export const ActorCard = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 0 10px;
  display: grid;
  p {
    max-width: 100px;
  }
  :hover {
    text-decoration: underline;
    div {
      -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.69);
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.69);
    }
  }
`;

export const ActorImg = styled(TabBG)`
  width: 100px;
  height: 150px;
`;

/*Recommend*/

export const RecContainer = styled(ActorsContainer)`
  background-color: #fff;
  p {
    max-width: 200px;
  }
`;

export const RecImg = styled(TabBG)`
  width: 200px;
  height: 300px;
`;

export const RecCard = styled(ActorCard)`
  row-gap: 10px;
`;
