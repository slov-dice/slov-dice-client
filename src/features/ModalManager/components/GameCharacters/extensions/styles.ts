import { motion } from 'framer-motion'
import styled from 'styled-components'

import { addBlockAttrs, removeBlockAttrs } from './motion'

export const TabPanelBase = styled.div`
  padding-top: 24px;
`
export const TabPanelBottomBase = styled.div`
  display: grid;
  grid: 1fr / 1fr;
  gap: 16px;

  max-width: min(300px, 100%);
  margin-left: auto;
`

export const BlockAdd = styled(motion.div).attrs(({ theme }) => addBlockAttrs(theme))`
  cursor: pointer;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 148px;
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

export const BlockRemove = styled(motion.div).attrs(removeBlockAttrs)`
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
