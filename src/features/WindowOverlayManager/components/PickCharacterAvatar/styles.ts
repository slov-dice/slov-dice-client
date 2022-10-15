import { motion } from 'framer-motion'
import styled from 'styled-components'

import * as m from './motion'

import { OverlayHeaderBase } from '../styles'

export const OverlayHeader = styled(OverlayHeaderBase)``

export const OverlayContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  padding: 16px;
`

export const AvatarWrapper = styled(motion.div).attrs<{ isSelected: boolean }>(
  ({ theme, isSelected }) => m.avatarWrapperAttrs(theme, isSelected),
)<{ isSelected: boolean }>`
  cursor: ${({ isSelected }) => (isSelected ? 'default' : 'pointer')};

  overflow: hidden;

  width: 156px;
  height: 156px;

  border-style: solid;
  border-width: 2px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
  }
`
