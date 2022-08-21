import { motion } from 'framer-motion'
import styled from 'styled-components'

import { containerAttrs, overlayAttrs } from './motion'

export const Container = styled(motion.div).attrs(containerAttrs)`
  position: fixed;
  z-index: ${({ theme }) => theme.order.sideMenuContent};
  top: 0;
  bottom: 0;
  left: 0;

  width: 300px;

  background: ${({ theme }) => theme.colors.black};

  @media ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`

export const Overlay = styled(motion.div).attrs(overlayAttrs)`
  position: fixed;
  z-index: ${({ theme }) => theme.order.sideMenuOverlay};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.white_05};
  backdrop-filter: blur(2px);
`
