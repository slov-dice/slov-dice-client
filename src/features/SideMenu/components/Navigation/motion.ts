import { HTMLMotionProps } from 'framer-motion'

export const navigationAttrs = (): HTMLMotionProps<'ul'> => ({
  variants: {
    opened: {
      y: 0,
      opacity: 1,
      pointerEvents: 'all',
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      pointerEvents: 'none',
      transition: {
        y: { stiffness: 1000 },
      },
    },
    exit: {
      y: '-140%',
    },
  },
})
