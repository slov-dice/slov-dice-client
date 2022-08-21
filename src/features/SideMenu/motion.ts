import { HTMLMotionProps } from 'framer-motion'

export const containerAttrs = (): HTMLMotionProps<'div'> => ({
  variants: {
    opened: (height = 1000) => ({
      clipPath: `circle(${height * 2}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(0px at 36px 27px)',
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  },
})

export const overlayAttrs = (): HTMLMotionProps<'div'> => ({
  variants: {
    opened: {
      opacity: 1,
      pointerEvents: 'all',
    },
    closed: {
      opacity: 0,
      pointerEvents: 'none',
    },
  },
})
