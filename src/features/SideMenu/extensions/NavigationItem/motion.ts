import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const navigationItemAttrs = (theme: DefaultTheme): HTMLMotionProps<'li'> => ({
  variants: {
    opened: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    rest: {
      transform: 'scale(1)',
    },
  },
  whileHover: { backgroundColor: theme.colors.white_30 },
  whileTap: { scale: 0.95 },
})
