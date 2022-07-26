import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    overflow-x: hidden;

    margin: 0;
    padding: 0;
    
    font-family: Rubik, sans-serif;
    font-size: 16px;

    ::-webkit-scrollbar {
      width: 2px;
    }

    ::-webkit-scrollbar-track {
      background-color: #1E1939;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #fff;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }
`
