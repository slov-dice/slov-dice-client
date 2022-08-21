import { HTMLMotionProps } from 'framer-motion'

export const titleAttrs = (): HTMLMotionProps<'span'> => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})
