import { motion } from 'framer-motion'
import styled from 'styled-components'

import { dotAttrs } from './motion'

export const Loader = styled(motion.div)`
  user-select: none;

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 68px;
  height: 68px;

  background: transparent;
`

export const Dot = styled(motion.div).attrs(({ theme }) => dotAttrs(theme))`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`
