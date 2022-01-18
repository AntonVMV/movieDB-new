import { HeaderContainer } from "../../styles/containers";
import { MainTitle } from "../../styles/text";
import { SearchElement } from "./SearchElement";
import { HeaderStyled } from "../../styles/header";
import { useState } from "react";

export const Header = () => {
  const [isActive, setActive] = useState(false);

  return (
    <HeaderStyled>
      <HeaderContainer>
        <MainTitle to="/Latest" open={isActive}>
          MOVIES-DB
        </MainTitle>
        <SearchElement isActive={isActive} setActive={setActive} />
      </HeaderContainer>
    </HeaderStyled>
  );
};
