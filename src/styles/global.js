import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
    }

    body{
        background-color: ${theme.colors.secondary};
    }
`;
