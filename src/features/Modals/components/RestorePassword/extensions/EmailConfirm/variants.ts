import { Variants } from 'framer-motion'

export const getWrapperVariants = (): Variants => ({
  initial: { x: -600, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -600, opacity: 0 },
})
