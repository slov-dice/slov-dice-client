import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const actionWrapperAttrs = (theme: DefaultTheme): HTMLMotionProps<'div'> => ({
  whileHover: { backgroundColor: theme.colors.white_10 },
  whileTap: { scale: 0.9 },
})
