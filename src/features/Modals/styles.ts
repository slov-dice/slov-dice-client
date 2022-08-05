import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrap = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}))`
  position: fixed;
  z-index: ${({ theme }) => theme.order.modalsWrap};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white_05};
  backdrop-filter: blur(2px);
`

export const Container = styled(motion.div).attrs<{ order: number }>(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}))<{ order: number }>`
  position: fixed;
  z-index: ${({ theme, order }) => theme.order.modalOverlay + order};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
