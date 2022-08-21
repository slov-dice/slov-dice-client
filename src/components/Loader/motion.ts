import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const dotAttrs = (theme: DefaultTheme): HTMLMotionProps<'div'> => ({
  variants: {
    loading: {
      opacity: 1,
      x: [-18, 18],
      y: [0, -30],
      boxShadow: [
        `0 0 5px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}, 0 0 50px ${theme.colors.primary}`,
        `0 0 2px ${theme.colors.primary}, 0 0 10px ${theme.colors.primary}, 0 0 30px ${theme.colors.primary}`,
      ],
      transition: {
        x: { repeatType: 'reverse', repeat: Infinity, duration: 0.8 },
        y: { repeatType: 'reverse', repeat: Infinity, duration: 0.4, ease: 'easeOut' },
        boxShadow: { repeatType: 'reverse', repeat: Infinity, duration: 3 },
      },
    },
    success: {
      scale: 1.5,
      x: 0,
      y: -20,
    },
    error: {
      scale: 1.5,
      x: 0,
      y: -20,
      boxShadow: [
        `0 0 5px ${theme.colors.primary}, 0 0 20px ${theme.colors.primary}, 0 0 50px ${theme.colors.primary}`,
        `0 0 2px ${theme.colors.primary}, 0 0 10px ${theme.colors.primary}, 0 0 30px ${theme.colors.primary}`,
      ],
      transition: {
        boxShadow: { repeatType: 'reverse', repeat: Infinity, duration: 3 },
      },
    },
  },
})
