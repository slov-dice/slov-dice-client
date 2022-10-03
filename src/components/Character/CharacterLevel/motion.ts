import { HTMLMotionProps } from 'framer-motion'

export const levelAttrs = (): HTMLMotionProps<'div'> => ({
  whileHover: { opacity: 0.75 },
  whileTap: { scale: 0.98 },
})
