import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { controlAttrs } from './motion'

export const Tile = styled.div`
  position: relative;
  z-index: 20;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.black_90};
`

export const TileHeader = styled.div`
  user-select: none;

  position: relative;
  z-index: 30;

  display: flex;
  justify-content: space-between;

  height: ${({ theme }) => theme.sizes.windowHeader.height}px;

  box-shadow: rgb(0 0 0 / 50%) 0 0 10px;
`

export const TileHeaderLabel = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  padding: 8px;

  font-weight: 300;
  text-transform: uppercase;

  fill: ${({ theme }) => theme.colors.primary_80};

  span:first-child {
    width: 24px;
    height: 24px;
  }
`

export const TileControls = styled.div`
  display: flex;
  gap: 4px;

  margin-right: 4px;
  padding: 4px;
`

interface I_ControlProps {
  $isDivider?: boolean
}

export const Control = styled(motion.div).attrs<I_ControlProps>(({ theme, $isDivider }) =>
  controlAttrs(theme, Boolean($isDivider)),
)<I_ControlProps>`
  display: flex;
  justify-content: center;

  height: 28px;

  border-radius: 15%;

  fill: ${({ theme }) => theme.colors.white};

  ${({ $isDivider }) =>
    $isDivider
      ? css`
          cursor: default;

          width: 12px;

          padding: 8px 2px;
        `
      : css`
          cursor: pointer;

          padding: 0 4px;

          width: 28px;
        `}
`

export const TileBody = styled.div`
  height: calc(100% - ${({ theme }) => theme.sizes.windowHeader.height}px);
`
