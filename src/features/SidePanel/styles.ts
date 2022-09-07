import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const SidePanel = styled(motion.div)`
  position: fixed;
  z-index: ${({ theme }) => theme.order.sidePanelContent};
  right: 0;
  bottom: 0;

  width: ${({ theme }) => theme.sizes.sidePanel.width}px;
  height: calc(100vh - ${({ theme }) => theme.sizes.header.height}px);

  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: rgb(0 0 0 / 50%) 0 9px 10px;
`

export const Overlay = styled(motion.div).attrs(({ theme }) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}))`
  position: fixed;
  z-index: ${({ theme }) => theme.order.sidePanelOverlay};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.white_05};
  backdrop-filter: blur(2px);
`
