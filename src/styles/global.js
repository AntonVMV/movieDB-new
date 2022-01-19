import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const Global = createGlobalStyle`
    html, body, #root {
        height: 100%
    }

    #root{
        display: grid;

        grid-template-rows: 1fr auto;
    }

    *{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body{
        background-color: ${theme.colors.primary};
        overflow-y: scroll;

    }
`;
