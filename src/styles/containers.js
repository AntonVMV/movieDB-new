import styled from "styled-components";
import { theme } from "./theme";

export const ContainerL = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    -19px 0px 50px -19px rgba(0, 0, 0, 0),
    inset 0px 0px 43px -7px rgba(0, 0, 0, 0.42);
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    -19px 0px 50px -19px rgba(0, 0, 0, 0),
    inset 0px 0px 43px -7px rgba(0, 0, 0, 0.42);
  @media screen and (max-width: 760px) {
    max-width: 100vw;
  }
`;

export const HeaderContainer = styled(ContainerL)`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 10px 20px;
  align-items: center;
  background-color: ${theme.colors.primary};
`;
