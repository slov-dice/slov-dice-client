import { HTMLMotionProps } from 'framer-motion'

export const wrapperAttrs = (): HTMLMotionProps<'div'> => ({
  whileHover: { opacity: 0.75 },
  whileTap: { scale: 0.95 },
})

export const labelAttrs = (): HTMLMotionProps<'span'> => ({
  initial: { y: 28 },
  animate: { y: 0 },
  exit: { y: 28 },
})
