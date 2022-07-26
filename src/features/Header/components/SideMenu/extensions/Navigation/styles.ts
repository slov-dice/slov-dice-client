import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Navigation = styled(motion.ul)`
  position: absolute;
  z-index: ${({ theme }) => theme.order.sideMenuContent};
  top: 64px;

  width: 268px;
`
