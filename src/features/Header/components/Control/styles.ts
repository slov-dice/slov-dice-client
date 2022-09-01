import { motion, Transition, Variants } from 'framer-motion'
import styled from 'styled-components'

import { controlAttrs } from './motion'

export const Control = styled(motion.div).attrs(({ theme }) => controlAttrs(theme))`
  cursor: pointer;
  user-select: none;

  position: relative;
  z-index: ${({ theme }) => theme.order.sideMenuControl};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin-right: 10px;

  background: transparent;
  border-radius: 10%;
`

interface I_PathProps {
  variants: Variants
  transition?: Transition
  d?: string
}

export const Path = styled(motion.path).attrs<I_PathProps>(
  ({ theme, variants, transition, d }) => ({
    fill: 'transparent',
    stroke: theme.colors.white,
    strokeWidth: '3',
    strokeLinecap: 'round',
    variants,
    transition,
    d,
  }),
)``
