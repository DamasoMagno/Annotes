import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { Router } from './routes'

import { GlobalStyles } from './styles/Global'
import { defaultTheme } from './styles/themes/defaultTheme'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>

      <ToastContainer position="top-center" theme="light" />
    </ThemeProvider>
  )
}
