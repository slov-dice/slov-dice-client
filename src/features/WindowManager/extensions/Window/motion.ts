import { HTMLMotionProps } from 'framer-motion'

export const wrapperAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  dragTransition: {
    power: 0,
    min: 0,
    max: 200,
    timeConstant: 250,
  },
})
