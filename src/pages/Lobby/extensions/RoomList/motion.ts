import { HTMLMotionProps } from 'framer-motion'

export const roomCardAttrs = (): HTMLMotionProps<'div'> => ({
  initial: 'rest',
  whileHover: 'hover',
  animate: 'rest',

  variants: {
    rest: {
      paddingBottom: 8,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    hover: {
      paddingBottom: 48,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  },
})

export const roomCardActionAttrs = (): HTMLMotionProps<'div'> => ({
  variants: {
    rest: {
      y: 37,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    hover: {
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  },
})
