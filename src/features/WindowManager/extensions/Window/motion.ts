import { HTMLMotionProps } from 'framer-motion'

export const wrapperAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { scale: 0 },
  animate: { scale: 1 },
})
