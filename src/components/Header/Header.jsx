import { HeaderContainer } from "../../styles/containers";
import { MainTitle } from "../../styles/text";
import { SearchElement } from "./SearchElement";
import { HeaderStyled } from "../../styles/header";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <MainTitle to="/Latest">MOVIES-DB</MainTitle>
        <SearchElement />
      </HeaderContainer>
    </HeaderStyled>
  );
};
