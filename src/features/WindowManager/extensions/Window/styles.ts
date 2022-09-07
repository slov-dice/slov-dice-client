import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { E_ResizerPosition } from '.'

import { wrapperAttrs } from './motion'

import { T_StyledVariants } from 'models/styled'

export const Wrapper = styled(motion.div).attrs(wrapperAttrs)`
  position: absolute;
  z-index: ${({ theme }) => theme.order.window};

  overflow: hidden;

  border: 2px solid ${({ theme }) => theme.colors.white_10};
`

export const Header = styled.div`
  user-select: none;

  display: flex;
  justify-content: space-between;

  height: 34px;

  background: ${({ theme }) => theme.colors.black_50};
`

export const HeaderLabel = styled.div`
  display: flex;
  gap: 8px;

  padding: 8px;

  font-weight: 300;
  text-transform: uppercase;

  fill: ${({ theme }) => theme.colors.primary_80};

  svg {
    width: 100%;
    height: 100%;
  }
`

export const HeaderActions = styled.div`
  display: flex;
`

export const HeaderAction = styled.div<{ isDivider?: boolean }>`
  display: flex;
  justify-content: center;

  height: 100%;

  fill: ${({ theme }) => theme.colors.white};

  ${({ isDivider }) =>
    isDivider
      ? css`
          cursor: default;

          width: 12px;

          padding: 8px 2px;
        `
      : css`
          cursor: pointer;

          padding: 6px 4px;

          width: 32px;
        `}

  & > svg {
    width: 100%;
    height: 100%;
  }
`

export const Resizer = styled.div<{ position: E_ResizerPosition }>`
  position: absolute;

  width: 14px;
  height: 14px;

  border-radius: 50%;

  ${({ position }) => controllerPosition[position]}
`

const controllerPosition: T_StyledVariants<E_ResizerPosition> = {
  n: css`
    cursor: n-resize;

    top: -2px;
    left: -2px;

    width: 100%;
    height: 5px;

    opacity: 0.5;
    border-radius: 0;
  `,

  ne: css`
    cursor: ne-resize;

    z-index: 1;
    top: -4px;
    right: -4px;
  `,
  e: css`
    cursor: e-resize;

    top: -2px;
    right: -2px;

    width: 5px;
    height: 100%;

    opacity: 0.5;
    border-radius: 0;
  `,
  se: css`
    cursor: se-resize;

    z-index: 1;
    right: -4px;
    bottom: -4px;
  `,
  s: css`
    cursor: s-resize;

    bottom: -2px;
    left: -2px;

    width: 100%;
    height: 5px;

    opacity: 0.5;
    border-radius: 0;
  `,

  sw: css`
    cursor: sw-resize;

    z-index: 1;
    bottom: -4px;
    left: -4px;
  `,

  w: css`
    cursor: w-resize;

    top: -2px;
    left: -2px;

    width: 5px;
    height: 100%;

    opacity: 0.5;
    border-radius: 0;
  `,

  nw: css`
    cursor: nw-resize;

    z-index: 1;
    top: -4px;
    left: -4px;
  `,
}

export const Content = styled.div<{ isResize: boolean }>`
  user-select: ${({ isResize }) => (isResize ? 'none' : 'auto')};

  height: calc(100% - 32px);
  padding: 24px;

  background: ${({ theme }) => theme.colors.black};
`
