import styled from "styled-components";
import { TabBG } from "./tab";

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 50px;
`;

export const Information = styled.ul`
  list-style: none;
  display: grid;
  align-items: flex-end;
`;

export const PosterImg = styled(TabBG)`
  width: 250px;
  height: 380px;
`;
