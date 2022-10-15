import { motion } from 'framer-motion'
import styled from 'styled-components'

import { barAttrs } from './motion'

import { EditableInput } from 'styles/components'

export const BarWrapper = styled(motion.div).attrs(barAttrs)`
  cursor: pointer;

  position: relative;

  overflow: hidden;

  height: 24px;

  border: 1px solid ${({ theme }) => theme.colors.white_50};
  border-radius: 8px;
`

export const BarLabel = styled.span`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-weight: 300;
  text-align: center;
`

export const BarInput = styled(EditableInput)`
  z-index: 2;

  text-align: center;
`

interface BarProgressProps {
  color: string
  width: number
}

export const BarProgress = styled.div<BarProgressProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  width: ${({ width }) => width}%;
  height: 100%;

  background-color: ${({ color }) => color};

  transition: width ease 300ms;
`
