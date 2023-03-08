import { motion } from 'framer-motion'
import styled from 'styled-components'

import { descriptionWrapperAttrs } from './motion'

export const DescriptionWrapper = styled(motion.div).attrs(({ theme }) =>
  descriptionWrapperAttrs(theme),
)`
  cursor: pointer;

  display: flex;

  min-height: 108px;
  padding: 4px;

  font-size: 18px;
  font-weight: 400;
  text-transform: none;

  border-radius: 4px;
`

export const DescriptionTextarea = styled.textarea`
  resize: none;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_10};
  border: none;
  outline: none;
`
