import { HTMLMotionProps } from 'framer-motion'

export const windowOverlayAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})
