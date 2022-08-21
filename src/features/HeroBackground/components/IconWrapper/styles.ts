import { motion } from 'framer-motion'
import styled from 'styled-components'

import { iconWrapperAttrs } from './motion'

export const IconWrapper = styled(motion.div).attrs<{ isLeft: boolean }>(({ isLeft }) =>
  iconWrapperAttrs(isLeft),
)<{ isLeft: boolean }>`
  position: absolute;

  opacity: 0.2;

  svg {
    width: auto !important;
    height: auto !important;
  }
`
