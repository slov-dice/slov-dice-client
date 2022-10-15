import { motion } from 'framer-motion'
import styled from 'styled-components'

import { nameAttrs } from './motion'

import { EditableInput } from 'styles/components'

export const NameWrapper = styled(motion.div).attrs(({ theme }) => nameAttrs(theme))`
  cursor: pointer;

  display: flex;
  justify-content: center;

  height: 24px;

  font-size: 18px;
  font-weight: 500;
  text-transform: none;

  border-radius: 4px;
`

export const NameInput = styled(EditableInput)`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`
