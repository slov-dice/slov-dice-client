import { HTMLMotionProps } from 'framer-motion'
import { DefaultTheme } from 'styled-components'

export const statusItemAttrs = (theme: DefaultTheme): HTMLMotionProps<'li'> => ({
  variants: {
    hidden: {
      x: -theme.sizes.authCallbackForm.width,
    },
    visible: (i: number) => ({
      x: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
  },
})
