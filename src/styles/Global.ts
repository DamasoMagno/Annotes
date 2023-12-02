import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    transition: font-size .25s;

    @media (max-width: 728px) {
      font-size: 85.5%;
    }    
  }

  body {
    background: ${(props) => props.theme.colors['--zinc-900']};
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`
