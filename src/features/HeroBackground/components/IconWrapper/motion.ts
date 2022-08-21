import { HTMLMotionProps } from 'framer-motion'

export const iconWrapperAttrs = (isLeft: boolean): HTMLMotionProps<'div'> => ({
  initial: { x: isLeft ? window.innerWidth : -window.innerWidth },
  animate: { x: 0 },
  transition: { type: 'spring', stiffness: 50 },
})
