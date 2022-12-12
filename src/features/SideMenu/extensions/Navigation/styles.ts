import { motion } from 'framer-motion'
import styled from 'styled-components'

import { navigationAttrs } from './motion'

export const Navigation = styled(motion.ul).attrs(navigationAttrs)`
  position: absolute;
  z-index: ${({ theme }) => theme.order.sideMenuContent};
  top: 64px;

  width: 268px;
`
