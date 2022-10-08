import { motion } from 'framer-motion'
import styled from 'styled-components'

import { effectIconAttrs } from './motion'

export const EffectIcon = styled(motion.span).attrs(effectIconAttrs)`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;
  padding: 4px;

  border-color: ${({ theme }) => theme.colors.white_50};
  border-style: dashed;
  border-width: 1px;
  border-radius: 50%;

  fill: ${({ theme }) => theme.colors.white};

  svg {
    width: 100%;
    height: 100%;
  }
`
