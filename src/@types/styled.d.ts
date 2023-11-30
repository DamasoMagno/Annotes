import 'styled-components'
import { defaultTheme } from '../styles/themes/defaultTheme'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
