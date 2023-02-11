import { createGlobalStyle } from 'styled-components';
import { variablesGlobal } from './variables';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline-offset: 0.25rem;

  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${variablesGlobal.colors.bgColor};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4 {
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
}

  li {
    list-style: none;
  }

  a {
    text-decoration: none;

    svg {
      color: ${variablesGlobal.colors.secondColor};
    }
  }

  img {
    max-width: 100%;
  }

  img[width][height] {
    height: auto;
  }
`;
export default GlobalStyle;
