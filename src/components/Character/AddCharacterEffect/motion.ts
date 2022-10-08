import { HTMLMotionProps } from 'framer-motion'

export const effectIconAttrs = (): HTMLMotionProps<'button'> => ({
  whileHover: { opacity: 0.75 },
  whileTap: { scale: 0.9 },
})
