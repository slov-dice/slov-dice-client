import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Breadcrumb = styled(motion.div)`
  position: absolute;
  left: 32px;
  top: 32px;
  cursor: pointer;
  user-select: none;

  svg {
    position: relative;
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.white};
  }
`
