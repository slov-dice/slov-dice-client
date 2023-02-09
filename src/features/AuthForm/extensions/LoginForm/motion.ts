import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const wrapperAttrs = (theme: DefaultTheme): HTMLMotionProps<'div'> => ({
  initial: { x: theme.sizes.authForm.width },
  animate: { x: 0 },
})
