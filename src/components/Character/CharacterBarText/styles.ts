import { motion } from 'framer-motion'
import styled from 'styled-components'

import { barTextWrapperAttrs } from './motion'

import { EditableInput } from 'styles/components'

export const BarTextWrapper = styled(motion.div).attrs(({ theme }) => barTextWrapperAttrs(theme))`
  cursor: pointer;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 24px;

  font-size: 18px;
  font-weight: 500;
  text-transform: none;

  border-radius: 4px;
`

export const BarTextInput = styled(EditableInput)`
  padding-inline: 4px;

  font-size: 18px;
  font-weight: 500;
  text-align: center;
`
