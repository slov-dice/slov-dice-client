import { motion } from 'framer-motion'
import styled from 'styled-components'

import { cardAttrs } from './motion'

export const Card = styled(motion.div).attrs(({ theme }) => cardAttrs(theme))`
  cursor: pointer;
  user-select: none;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 360px;
  min-height: 305px;
  padding: 8px;

  font-size: 24px;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.colors.white_05};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`

export const CardIcon = styled.div`
  width: 72px;
  height: 72px;

  fill: ${({ theme }) => theme.colors.white};

  svg {
    width: 100%;
    height: 100%;
  }
`
