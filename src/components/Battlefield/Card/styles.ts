import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import styled from 'styled-components'

import * as C from 'styles/components'

export const CardWrapper = styled(Tilt).attrs({
  glareEnable: true,
  glareMaxOpacity: 0.1,
  glareColor: '#ff3d6f80',
  glarePosition: 'right',
  glareBorderRadius: '4px',
  reverse: false,
  perspective: 1500,
})`
  overflow: hidden;

  min-width: 140px;
  max-width: 140px;
  min-height: 220px;
  max-height: 220px;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`

export const CardInfoInner = styled(motion.div).attrs({
  key: 'info',
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
})`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 8px;
`

export const CardInfoContent = styled.div`
  max-height: 220px;
`

export const CardActionsInner = styled(motion.div).attrs({
  key: 'actions',
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
})`
  position: relative;

  overflow: auto;
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 8px;
`

export const CardTitle = styled.span`
  display: flex;
  justify-content: center;

  margin-bottom: 24px;
`

export const BackButton = styled(C.Control)`
  position: absolute;
  z-index: 5;
  top: 8px;
  left: 8px;

  border: 1px solid ${({ theme }) => theme.colors.white_10};
`

export const CardAction = styled(C.Control)`
  position: absolute;
  top: 8px;
  right: 8px;

  border: 1px solid ${({ theme }) => theme.colors.white_10};
`

export const CardAvatar = styled.img`
  overflow: hidden;

  width: 100%;
  height: 50%;

  object-fit: cover;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`
