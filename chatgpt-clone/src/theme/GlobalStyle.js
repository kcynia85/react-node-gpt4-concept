import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Open Sans', serif;
        color: #fff;
        margin: 0;
        padding: 0;
        background-color: #343541;
    }
`;

export default GlobalStyle;
