import { FlattenSimpleInterpolation } from 'styled-components'

export enum E_Theme {
  classic = 'classic',
  dark = 'dark',
  light = 'light',
}

export type T_StyledVariants<E extends string | number> = {
  [key in E]?: FlattenSimpleInterpolation
}
