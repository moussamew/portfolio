import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 1.6rem;
    padding: 0 4rem;
  }

  p, label, a, span {
    line-height: 1.5em;
    margin: unset;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  
  button {
    outline: none;
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyle;
