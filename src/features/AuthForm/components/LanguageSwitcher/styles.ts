import { motion } from 'framer-motion'
import styled from 'styled-components'

import { wrapperAttrs, labelAttrs } from './motion'

export const Wrapper = styled(motion.div).attrs(wrapperAttrs)`
  cursor: pointer;
  user-select: none;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_10};
  box-shadow: rgba(0, 0, 0, 50%) 0 3px 7px -3px, 0 3px 0 0 ${({ theme }) => theme.colors.primary};
`

export const Label = styled(motion.span).attrs(labelAttrs)``
