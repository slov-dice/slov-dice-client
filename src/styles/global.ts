import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    overflow-x: hidden;
  
    min-height:  100vh;
    margin: 0;
    padding: 0;
    
    font-family: Rubik, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};

    background: #211b29;
    
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

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`
