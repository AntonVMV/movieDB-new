import { theme } from "./theme";
import styled from "styled-components";

export const MainTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: ${theme.title.large.fontSize}px;
  font-weight: ${theme.title.large.fontWeigth};
  background-color: transparent;
`;

export const BigTitle = styled.h3`
  font-size: ${theme.title.xlarge.fontSize}px;
  font-weight: ${theme.title.xlarge.fontWeigth}px;
  @media screen and (max-width: 570px) {
    font-size: 24px;
  }
`;

export const SmallText = styled.p`
  font-size: ${theme.text.medium.fontSize}px;
  @media screen and (max-width: 570px) {
    font-size: 14px;
  }
`;