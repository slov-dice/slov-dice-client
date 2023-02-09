import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const navigationItemAttrs = (theme: DefaultTheme): HTMLMotionProps<'li'> => ({
  whileHover: { backgroundColor: theme.colors.white_30 },
  whileTap: { scale: 0.95 },
})
