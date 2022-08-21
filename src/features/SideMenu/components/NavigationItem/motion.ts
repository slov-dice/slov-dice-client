import { HTMLMotionProps } from 'framer-motion'

export const navigationItemAttrs = (): HTMLMotionProps<'li'> => ({
  variants: {
    opened: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    rest: {
      transform: 'scale(1)',
    },
  },
})
