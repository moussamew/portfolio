import { createGlobalStyle } from 'styled-components';
const { colors } = require('../../../tailwind');

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    padding: 0 4rem;
  }

  p, label, a, span {
    line-height: 1.5em;
    margin: unset;
    font-family: "Open Sans";
    font-weight: normal;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  strong {
    color: ${colors.blueDark};
    font-weight: normal;
  }
  
  button {
    outline: none;
    cursor: pointer;
    border: none;
  }
`;

export default GlobalStyle;
