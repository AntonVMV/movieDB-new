import styled from "styled-components";
import { theme } from "./theme";

export const ContainerL = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.7) inset;
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
