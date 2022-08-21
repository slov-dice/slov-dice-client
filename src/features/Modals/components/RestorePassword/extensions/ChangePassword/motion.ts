import { HTMLMotionProps } from 'framer-motion'

export const wrapperAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { x: -600, opacity: 0 },
  animate: { x: 0, opacity: 1 },
})
