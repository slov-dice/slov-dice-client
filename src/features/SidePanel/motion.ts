import { HTMLMotionProps } from 'framer-motion'

export const sidePanelAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { x: { type: 'easeInOut' } },
})

export const sidePanelWrapperAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { x: 200 },
  animate: { x: 0 },
})

export const overlayAttrs = (): HTMLMotionProps<'div'> => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})
