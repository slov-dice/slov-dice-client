import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const headerAttrs = (
  isTransparent: boolean,
  theme: DefaultTheme,
): HTMLMotionProps<'header'> => ({
  initial: { y: -theme.sizes.header.height * 2 },
  animate: isTransparent ? 'transparent' : 'painted',
  exit: { y: -theme.sizes.header.height * 2 },
  transition: { type: 'spring', stiffness: 50 },
  variants: {
    transparent: {
      y: 0,
      backgroundColor: theme.colors.black_00,
      boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
    },
    painted: {
      y: 0,
      backgroundColor: theme.colors.black,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    },
  },
})

export const wrapperControlAttrs = (sideMenuVisible: boolean): HTMLMotionProps<'div'> => ({
  initial: false,
  animate: sideMenuVisible ? 'opened' : 'closed',
  exit: 'closed',
})
