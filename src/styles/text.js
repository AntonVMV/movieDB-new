import { theme } from "./theme";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainTitle = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-size: ${theme.title.large.fontSize}px;
  font-weight: ${theme.title.large.fontWeigth};
  background-color: transparent;
`;

export const BigTitle = styled.h3`
  font-size: ${theme.title.xlarge.fontSize}px;
  font-weight: ${theme.title.xlarge.fontWeigth};
  @media screen and (max-width: 570px) {
    font-size: 24px;
  }
`;

export const MedTitle = styled.h3`
  font-size: ${theme.title.medium.fontSize}px;
  font-weight: ${theme.title.medium.fontWeigth};
`;

export const SmallTitle = styled.h3`
  font-size: ${theme.title.small.fontSize}px;
  font-weight: ${theme.title.small.fontWeigth};
`;

export const MedText = styled.p`
  font-size: ${theme.text.medium.fontSize}px;
  @media screen and (max-width: 570px) {
    font-size: 14px;
  }
`;

export const SmallText = styled.p`
  font-size: ${theme.text.small.fontSize}px;
`;
