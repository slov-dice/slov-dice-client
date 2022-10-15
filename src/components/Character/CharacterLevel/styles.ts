import { motion } from 'framer-motion'
import styled from 'styled-components'

import { levelAttrs } from './motion'

import { EditableInput } from 'styles/components'

export const LevelWrapper = styled(motion.div).attrs(levelAttrs)`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  max-width: 124px;
  height: 23px;
  margin: 0 auto;
  padding: 2px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`

export const LevelInput = styled(EditableInput)`
  font-weight: 600;
  text-align: center;
`

export const LevelLabel = styled.span`
  width: 100%;

  font-weight: 600;
  text-align: center;
`
