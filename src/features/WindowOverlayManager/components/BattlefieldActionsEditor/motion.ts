import { HTMLMotionProps } from 'framer-motion'

export const blockRemoveAttrs = (): HTMLMotionProps<'div'> => ({
  whileHover: { opacity: 0.75 },
  whileTap: { scale: 0.95, opacity: 0.75 },
})
