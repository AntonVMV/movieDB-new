import styled from "styled-components";

export const ContainerL = styled.div`
  max-width: 80vw;
  margin: 0 auto;

  @media screen and (max-width: 950px) {
    max-width: 100vw;
    padding: 0 20px;
  }
`;

export const ContentContainer = styled(ContainerL)`
  min-height: 90vh;
`;

export const HeaderContainer = styled(ContainerL)`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 15px 0;
  align-items: center;
  z-index: 3;
  @media screen and (max-width: 950px) {
    padding: 15px 20px;
  }
`;

export const SearchResultsHeader = styled.div`
  padding: 85px 0 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: baseline;
`;

export const FooterContainer = styled(ContainerL)`
  padding: 20px 0;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  @media screen and (max-width: 756px) {
    padding: 20px 20px;
  }
`;

export const DetailsContainer = styled(ContainerL)`
  padding: 70px 0 30px;
  @media screen and (max-width: 950px) {
    padding: 70px 20px 30px;
  }
`;
