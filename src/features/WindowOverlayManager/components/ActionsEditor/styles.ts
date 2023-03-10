import { motion } from 'framer-motion'
import styled from 'styled-components'

import { blockRemoveAttrs } from './motion'

import { ContentBlockBase, OverlayHeaderBase } from '../styles'

export const OverlayHeader = styled(OverlayHeaderBase)``

export const OverlayContent = styled.div`
  padding: 16px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

export const ContentBlock = styled(ContentBlockBase)`
  position: relative;

  width: 400px;
`

export const ContentBottom = styled.div`
  display: grid;
  grid: 1fr / 1fr 2fr;
  gap: 16px;

  max-width: min(600px, 100%);
  margin-left: auto;
`

export const BlockRemove = styled(motion.div).attrs(blockRemoveAttrs)`
  cursor: pointer;

  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  justify-content: center;

  width: 24px;
  height: 24px;
  padding: 2px 4px;

  background-color: ${({ theme }) => theme.colors.primary_50};
  border-radius: 50%;

  fill: ${({ theme }) => theme.colors.white};

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export const BlockAdd = styled.div`
  cursor: pointer;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 307px;
  padding: 12px;

  font-size: 24px;

  background-color: ${({ theme }) => theme.colors.white_05};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;

  svg {
    width: 48px;
    height: 48px;

    fill: ${({ theme }) => theme.colors.white};
  }
`

export const AutocompleteWrapper = styled.div`
  position: relative;

  width: 100%;
`

export const AutocompleteWarning = styled.div`
  position: absolute;
  top: -16px;
  left: 0;

  font-size: 12px;
  color: ${({ theme }) => theme.colors.white_50};
`
