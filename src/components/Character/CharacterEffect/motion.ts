import { HTMLMotionProps } from 'framer-motion'

export const effectRemoveAttrs = (): HTMLMotionProps<'span'> => ({
  whileHover: { opacity: 0.5 },
  whileTap: { scale: 0.8 },
})
