import { motion } from 'framer-motion'
import styled from 'styled-components'

import { backButtonAttrs } from './motion'

export const BackButton = styled(motion.div).attrs(backButtonAttrs)`
  cursor: pointer;
  user-select: none;

  position: absolute;
  top: 24px;
  left: 32px;

  svg {
    position: relative;

    width: 18px;
    height: 18px;

    fill: ${({ theme }) => theme.colors.white};
  }
`
