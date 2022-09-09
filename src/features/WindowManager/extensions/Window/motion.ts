import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const wrapperAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  dragTransition: {
    power: 0,
    min: 0,
    max: 200,
    timeConstant: 250,
  },
})

export const headerActionAttrs = (theme: DefaultTheme, isDivider: boolean) => ({
  whileHover: isDivider ? {} : { backgroundColor: theme.colors.white_30 },
  whileTap: isDivider ? {} : { scale: 0.95 },
})
