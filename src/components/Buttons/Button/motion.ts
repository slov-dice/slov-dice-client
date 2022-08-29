import { HTMLMotionProps } from 'framer-motion'

export const buttonAttrs = (disabled: boolean): HTMLMotionProps<'button'> => ({
  whileHover: { opacity: 0.9 },
  whileTap: { scale: disabled ? 1 : 0.95 },
})
