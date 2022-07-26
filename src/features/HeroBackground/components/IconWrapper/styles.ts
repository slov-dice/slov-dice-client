import { motion } from 'framer-motion'
import styled from 'styled-components'

export const IconWrapper = styled(motion.div).attrs<{ isLeft: boolean }>(({ isLeft }) => ({
  initial: { x: isLeft ? window.innerWidth : -window.innerWidth },
  animate: { x: 0 },
  transition: { type: 'spring', stiffness: 50 },
}))<{
  isLeft: boolean
}>`
  position: absolute;

  opacity: 0.2;

  svg {
    width: auto !important;
    height: auto !important;
  }
`
