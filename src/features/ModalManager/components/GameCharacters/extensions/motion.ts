import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const addBlockAttrs = (theme: DefaultTheme): HTMLMotionProps<'div'> => ({
  whileHover: { backgroundColor: theme.colors.white_10 },
  whileTap: { scale: 0.95 },
})

export const removeBlockAttrs = () => ({
  whileHover: { opacity: 0.75 },
  whileTap: { scale: 0.95, opacity: 0.75 },
})
