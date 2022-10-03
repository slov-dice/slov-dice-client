import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const specialAttrs = (theme: DefaultTheme): HTMLMotionProps<'div'> => ({
  whileHover: { backgroundColor: theme.colors.white_30 },
  whileTap: { scale: 0.98 },
})
