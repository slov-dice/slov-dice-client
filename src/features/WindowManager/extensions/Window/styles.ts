import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { controlAttrs, wrapperAttrs } from './motion'

import { E_ResizerPosition } from '../../models/window'

import { T_StyledVariants } from 'models/styled'

interface I_WrapperProps {
  isResize: boolean
  transformTransitionChanger: boolean
  sizeTransitionChanger: boolean
}

export const Wrapper = styled(motion.div).attrs(wrapperAttrs)<I_WrapperProps>`
  position: absolute;
  z-index: ${({ theme }) => theme.order.window};

  overflow: hidden;

  transition: ${({ isResize, theme, transformTransitionChanger, sizeTransitionChanger }) => css`
    ${isResize || (sizeTransitionChanger && !transformTransitionChanger)
      ? 0
      : theme.durations.ms300}ms width ease,
    ${isResize || (sizeTransitionChanger && !transformTransitionChanger)
      ? 0
      : theme.durations.ms300}ms height ease
    ${transformTransitionChanger && `, ${theme.durations.ms300}ms transform ease`}
  `};
`

export const Header = styled.div`
  user-select: none;

  display: flex;
  justify-content: space-between;

  height: ${({ theme }) => theme.sizes.windowHeader.height}px;

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

export const HeaderControls = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px;
`

interface I_ControlProps {
  isDivider?: boolean
}

export const Control = styled(motion.div).attrs<I_ControlProps>(({ theme, isDivider }) =>
  controlAttrs(theme, Boolean(isDivider)),
)<I_ControlProps>`
  display: flex;
  justify-content: center;
  border-radius: 15%;

  height: 28px;

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

          padding: 0 4px;

          width: 28px;
        `}

  & > svg {
    width: 100%;
    height: 100%;
  }
`

interface I_ResizerProps {
  position: E_ResizerPosition
  isFullSize: boolean
  isMinSize: boolean
}

export const Resizer = styled.button<I_ResizerProps>`
  position: absolute;

  width: 14px;
  height: 14px;

  background-color: ${({ theme }) => theme.colors.white_10};
  border-color: transparent;
  border-radius: 50%;

  ${({ position }) => controllerPosition[position]}
  ${({ isFullSize, isMinSize }) =>
    (isFullSize || isMinSize) &&
    css`
      cursor: default;
    `}
`

const controllerPosition: T_StyledVariants<E_ResizerPosition> = {
  n: css`
    cursor: n-resize;

    top: -2px;
    left: -2px;

    width: 100%;
    height: 6px;

    opacity: 0.5;
    border-radius: 0;
  `,

  ne: css`
    cursor: ne-resize;

    z-index: 1;
    top: -4px;
    right: -4px;

    background-color: transparent;
  `,
  e: css`
    cursor: e-resize;

    top: -2px;
    right: -2px;

    width: 6px;
    height: 100%;

    opacity: 0.5;
    border-radius: 0;
  `,
  se: css`
    cursor: se-resize;

    z-index: 1;
    right: -4px;
    bottom: -4px;

    background-color: transparent;
  `,
  s: css`
    cursor: s-resize;

    bottom: -2px;
    left: -2px;

    width: 100%;
    height: 6px;

    opacity: 0.5;
    border-radius: 0;
  `,

  sw: css`
    cursor: sw-resize;

    z-index: 1;
    bottom: -4px;
    left: -4px;

    background-color: transparent;
  `,

  w: css`
    cursor: w-resize;

    top: -2px;
    left: -2px;

    width: 6px;
    height: 100%;

    opacity: 0.5;
    border-radius: 0;
  `,

  nw: css`
    cursor: nw-resize;

    z-index: 1;
    top: -4px;
    left: -4px;

    background-color: transparent;
  `,
}

export const Content = styled.div<{ isResize: boolean; focused: boolean }>`
  user-select: ${({ isResize, focused }) => (isResize || !focused ? 'none' : 'auto')};

  height: calc(100% - 32px);
  padding: 24px;
  overflow: auto;

  background: ${({ theme }) => theme.colors.black};

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1e1939;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`
