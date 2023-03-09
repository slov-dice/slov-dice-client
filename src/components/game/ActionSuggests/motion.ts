import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const suggestItemAttrs = (theme: DefaultTheme): HTMLMotionProps<'li'> => ({
  whileHover: {
    backgroundColor: theme.colors.primary_50,
  },
})
