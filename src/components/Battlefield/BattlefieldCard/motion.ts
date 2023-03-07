import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const actionOverlayItemAttrs = (theme: DefaultTheme): HTMLMotionProps<'div'> => ({
  whileHover: {
    backgroundColor: theme.colors.white_10,
  },
})
