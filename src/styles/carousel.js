import styled from "styled-components";
import { keyframes } from "styled-components";
import { BigTitle, SmallText } from "./text";
import { ButtonOk } from "./components";
import { ContainerL } from "./containers";

export const Slider = styled.div`
  background-color: black;
  overflow: hidden;
  height: 550px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  @media screen and (max-width: 570px) {
    height: 450px;
  }
`;

export const Slide = styled.div`
  background: url(${(props) => props.image}) center 15% no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: 1s ease;
  @media screen and (max-width: 570px) {
    left: 0;
  }
`;

const translateLeft = keyframes`
  0%{
    transform: translateX(20%);
  }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SliderDescription = styled(ContainerL)`
  color: white;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 60px 20px;
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: none;
  @media screen and (max-width: 769px) {
    padding: 60px 20px 20px;
  }
`;

export const SliderTitle = styled(BigTitle)`
  text-transform: uppercase;
  opacity: 0;
  animation: ${translateLeft} 1s ease forwards;
`;

export const SliderText = styled(SmallText)`
  display: flex;
  align-items: center;
  width: 70%;
  opacity: 0;
  animation: ${translateLeft} 1s 0.2s ease forwards;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const SliderRating = styled.div`
  font-size: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 5px;
  opacity: 0;
  animation: ${translateLeft} 1s 0.4s ease forwards;
`;

export const SliderButton = styled(ButtonOk)`
  opacity: 0;
  animation: ${translateLeft} 1s 0.6s ease forwards;
`;

export const SliderControls = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  color: white;
  z-index: 2;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  @media screen and (max-width: 569px) {
    display: none;
  }
`;

export const SliderControlBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.3s ease;

  :hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
  }
`;

export const BackgroundColor = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const SliderNavs = styled.div`
  padding: 15px 0;
  display: flex;
  z-index: 2;
  justify-self: center;
  @media screen and (min-width: 570px) {
    display: none;
  }
`;

export const SliderDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin: 0 2px;
  border: 1px solid white;
  background-color: ${(props) => (props.active ? "white" : "transparent")};
  cursor: pointer;
  transition: 0.3s ease;
`;
