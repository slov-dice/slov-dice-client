import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const descriptionWrapperAttrs = (theme: DefaultTheme): HTMLMotionProps<'div'> => ({
  whileHover: { backgroundColor: theme.colors.white_30 },
  whileTap: { scale: 0.98 },
})
