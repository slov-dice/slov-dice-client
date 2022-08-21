import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const wrapperAttrs = (theme: DefaultTheme): HTMLMotionProps<'div'> => ({
  initial: {
    textShadow: `0 0 10px ${theme.colors.primary}, 0 0 40px ${theme.colors.primary}, 0 0 100px ${theme.colors.primary}`,
  },
  animate: {
    textShadow: `0 0 5px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}, 0 0 60px ${theme.colors.primary}`,
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse',
  },
})
