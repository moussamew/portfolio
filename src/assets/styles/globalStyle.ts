import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    padding: 0 2rem;

    @media (min-width: 768px) {
      padding: 0 4rem;
    }
  }

  p, label, a, span {
    line-height: 1.6em;
    margin: unset;
    font-family: "Open Sans";
    font-weight: normal;
    
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  a {
    text-decoration: unset;
  }

  i {
    ${tw`text-blueDark`}
  }

  img {
    border-radius: 0.5rem;
  }
  
  button {
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 1.6rem;
    padding: 0;
  }

  ::selection {
    ${tw`bg-blue text-white`}
  }
`

export default GlobalStyle
