import { Variants } from 'framer-motion'

export const navigationItemVariants: Variants = {
  opened: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  rest: {
    transform: 'scale(1)',
  },
}
