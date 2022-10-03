import { HTMLMotionProps } from 'framer-motion'

export const barAttrs = (): HTMLMotionProps<'div'> => ({
  whileHover: { opacity: 0.75 },
  whileTap: { scale: 0.95 },
})
