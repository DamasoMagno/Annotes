import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes'

import { GlobalStyles } from './styles/Global'
import { THEME } from './styles/Themes'

export function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
