import { HeaderContainer } from "../../styles/containers";
import { MainTitle } from "../../styles/text";
import { SearchElement } from "./SearchElement";

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <MainTitle>MOVIES-DB</MainTitle>
        <SearchElement />
      </HeaderContainer>
    </header>
  );
};
