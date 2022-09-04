import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { E_ResizerPosition } from '.'

import { wrapperAttrs } from './motion'

import { StyledVariants } from 'models/styled'

export const Wrapper = styled(motion.div).attrs(wrapperAttrs)`
  position: absolute;
  z-index: 1000;
  top: ${({ theme }) => theme.sizes.header.height}px;

  width: ${({ theme }) => theme.sizes.window.width}px;
  min-width: ${({ theme }) => theme.sizes.window.width}px;
  height: ${({ theme }) => theme.sizes.window.height}px;
  min-height: ${({ theme }) => theme.sizes.window.height}px;

  border: 2px solid ${({ theme }) => theme.colors.white_10};
`

export const Head = styled.div`
  user-select: none;

  display: flex;
  justify-content: space-between;

  height: 32px;
  padding: 8px;

  background: ${({ theme }) => theme.colors.black_50};
`

export const Resizer = styled.div<{ position: E_ResizerPosition }>`
  position: absolute;

  width: 10px;
  height: 10px;

  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  ${({ position }) => controllerPosition[position]}
`

const controllerPosition: StyledVariants<E_ResizerPosition> = {
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

    top: -2px;
    right: -2px;
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

    right: -2px;
    bottom: -2px;
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

    bottom: -2px;
    left: -2px;
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

    top: -2px;
    left: -2px;
  `,
}

export const Content = styled.div`
  height: calc(100% - 32px);
  padding: 24px;

  background: ${({ theme }) => theme.colors.black};
`
