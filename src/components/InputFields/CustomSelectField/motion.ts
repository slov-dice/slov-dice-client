import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const listItemAttrs = (theme: DefaultTheme): HTMLMotionProps<'li'> => ({
  whileHover: {
    backgroundColor: theme.colors.primary_50,
  },
})
