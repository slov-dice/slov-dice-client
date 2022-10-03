import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const titleAttrs = (): HTMLMotionProps<'span'> => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})

export const controlAttrs = (theme: DefaultTheme) => ({
  whileHover: { backgroundColor: theme.colors.white_30 },
  whileTap: { scale: 0.95 },
})
