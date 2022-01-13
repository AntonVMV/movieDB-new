import styled from "styled-components";
import { theme } from "./theme";

export const ContainerL = styled.div`
  max-width: 80vw;
  margin: 0 auto;
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
  z-index: 3;
`;
