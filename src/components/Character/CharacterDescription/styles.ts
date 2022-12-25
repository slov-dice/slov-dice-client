import { motion } from 'framer-motion'
import styled from 'styled-components'

import { descriptionWrapperAttrs } from './motion'

import { EditableTextarea } from 'styles/components'

export const DescriptionWrapper = styled(motion.div).attrs(({ theme }) =>
  descriptionWrapperAttrs(theme),
)`
  cursor: pointer;

  display: flex;

  min-height: 124px;
  padding: 4px;

  font-size: 18px;
  font-weight: 400;
  text-transform: none;
  word-break: break-all;

  border-radius: 4px;
`

export const DescriptionTextarea = styled(EditableTextarea)`
  font-size: 18px;
  font-weight: 400;
`
