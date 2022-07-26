import { FlattenSimpleInterpolation, DefaultTheme } from 'styled-components'

export type StyledVariants<E extends string | number> = {
  [key in E]?: FlattenSimpleInterpolation
}
