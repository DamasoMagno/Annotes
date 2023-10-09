import 'styled-components'
import { THEME } from '../styles/Themes'

type Themes = typeof THEME

declare module 'styled-components' {
  export interface DefaultTheme extends Themes {}
}
