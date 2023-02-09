import { motion } from 'framer-motion'
import styled from 'styled-components'

import { overlayAttrs, sidePanelAttrs, sidePanelWrapperAttrs } from './motion'

export const Container = styled.div`
  position: relative;
`

export const SidePanelWrapper = styled(motion.div).attrs(sidePanelAttrs)`
  position: fixed;
  z-index: ${({ theme }) => theme.order.sidePanelContent};
  right: 0;
  bottom: 0;

  width: ${({ theme }) => theme.sizes.sidePanel.width}px;
  height: calc(100vh - ${({ theme }) => theme.sizes.header.height}px);

  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: rgb(0 0 0 / 50%) 0 9px 10px;
`

export const SidePanelInner = styled(motion.div).attrs(sidePanelWrapperAttrs)`
  height: 100%;
`

export const Overlay = styled(motion.div).attrs(overlayAttrs)`
  position: fixed;
  z-index: ${({ theme }) => theme.order.sidePanelOverlay};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.white_05};
  backdrop-filter: blur(2px);
`
