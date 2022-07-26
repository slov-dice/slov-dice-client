/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import 'styled-components'

import { Theme } from 'styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
