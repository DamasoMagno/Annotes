import 'styled-components'
import { defaultThemes } from '../styles/themes/defaultTheme'

type Themes = typeof defaultThemes

declare module 'styled-components' {
  export interface DefaultTheme extends Themes {}
}
