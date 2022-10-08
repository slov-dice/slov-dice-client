import { motion } from 'framer-motion'
import styled from 'styled-components'

import { windowOverlayAttrs } from './motion'

export const WindowOverlay = styled(motion.div).attrs(windowOverlayAttrs)`
  position: absolute;
  z-index: 90;
  top: 0;

  overflow: auto;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.black_90};
  backdrop-filter: blur(2px);
  border: 1px solid ${({ theme }) => theme.colors.white_10};

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`
