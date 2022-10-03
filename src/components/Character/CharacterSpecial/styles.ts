import { motion } from 'framer-motion'
import styled from 'styled-components'

import { specialAttrs } from './motion'

import { EditableInput } from 'styles/components'

export const Special = styled(motion.div).attrs(({ theme }) => specialAttrs(theme))`
  cursor: pointer;

  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;

  padding: 2px;

  border-radius: 4px;
`

export const SpecialInput = styled(EditableInput)`
  text-align: end;
`

export const SpecialValue = styled.span`
  font-weight: 600;
`
