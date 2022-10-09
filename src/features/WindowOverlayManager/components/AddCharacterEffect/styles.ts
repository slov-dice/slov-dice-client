import { motion } from 'framer-motion'
import styled from 'styled-components'

import { actionWrapperAttrs } from './motion'

import { OverlayHeaderBase } from '../styles'

export const OverlayHeader = styled(OverlayHeaderBase)``

export const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;

  padding: 16px;
`

export const EffectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

export const EffectWrapper = styled.div`
  display: grid;
  grid: 1fr / 56px 5fr 56px;

  min-width: 372px;
  max-width: 420px;
  min-height: 56px;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconInner = styled.div`
  width: 32px;
  height: 32px;
`

export const DescriptionWrapper = styled.div`
  padding-inline: 4px;

  border-inline: 1px dashed ${({ theme }) => theme.colors.white};
`

export const ActionWrapper = styled(motion.div).attrs(({ theme }) => actionWrapperAttrs(theme))`
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ActionInner = styled.div<{ isSelected: boolean }>`
  transform: ${({ isSelected }) => (isSelected ? 'rotate(45deg)' : 'rotate(0)')};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  fill: ${({ theme, isSelected }) => (isSelected ? theme.colors.primary : theme.colors.white)};

  transition-timing-function: ease;
  transition-duration: 400ms;
  transition-property: transform fill;
`
