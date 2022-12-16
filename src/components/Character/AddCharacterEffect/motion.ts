import { HTMLMotionProps } from 'framer-motion'

export const effectIconAttrs = (): HTMLMotionProps<'span'> => ({
  whileHover: { opacity: 0.75 },
  whileTap: { scale: 0.9 },
})
