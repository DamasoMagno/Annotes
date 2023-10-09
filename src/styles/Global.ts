import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --gray-50: #F9FAFB;
    --gray-100: #F3F4F6; 
    --gray-200: #E5E7EB;
    --gray-300: #D1D5DB;
    --gray-400: #9CA3AF; 
    --gray-600: #4B5563;
    --neutral-900: #171717;
    --neutral-950: #0A0A0A;
    --zinc-950: #18181B;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #202024;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`