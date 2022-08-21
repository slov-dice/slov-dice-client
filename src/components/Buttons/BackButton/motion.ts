import { HTMLMotionProps } from 'framer-motion'

export const backButtonAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { x: -120 },
  animate: { x: 0 },
  exit: { x: -120 },
})
