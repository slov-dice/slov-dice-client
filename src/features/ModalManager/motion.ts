import { HTMLMotionProps } from 'framer-motion'

export const wrapperAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})

export const containerAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})
