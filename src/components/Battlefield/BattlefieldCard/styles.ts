import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import styled, { css } from 'styled-components'

import { actionAnimationDuration } from './'

import { acting, glowSpin, shake } from 'styles/animations'
import * as C from 'styles/components'

export const CardWrapper = styled(Tilt).attrs({
  glareEnable: true,
  glareMaxOpacity: 0.1,
  glareColor: '#ff3d6f80',
  glarePosition: 'right',
  glareBorderRadius: '4px',
  reverse: false,
  perspective: 1500,
})<{ isActive: boolean; isActionTarget: boolean; isTarget: boolean; isActionInitiator: boolean }>`
  user-select: none;

  position: relative;

  overflow: hidden;

  width: 248px;
  min-width: 248px;
  max-width: 248px;
  height: 100%;
  max-height: 360px;
  padding: 2px;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 75%) 0 3px 6px;

  ${({ isActive }) =>
    isActive
      ? css`
          z-index: 10;

          :before {
            content: '';

            position: absolute;
            z-index: -1;
            top: -50%;
            left: -50%;
            transform-origin: bottom right;

            width: 100%;
            height: 100%;

            background-image: linear-gradient(
              0deg,
              hsl(266deg 61% 26%) 0%,
              hsl(281deg 63% 28%) 21%,
              hsl(294deg 64% 29%) 30%,
              hsl(306deg 68% 31%) 39%,
              hsl(315deg 73% 36%) 46%,
              hsl(321deg 75% 40%) 54%,
              hsl(327deg 74% 45%) 61%,
              hsl(333deg 72% 50%) 69%,
              hsl(339deg 85% 56%) 79%,
              hsl(345deg 100% 62%) 100%
            );

            animation: ${glowSpin} 12s infinite linear;
          }

          :after {
            content: '';

            position: absolute;
            z-index: -1;
            top: -50%;
            left: -50%;
            transform-origin: bottom right;

            width: 100%;
            height: 100%;

            background-image: linear-gradient(
              0deg,
              hsl(266deg 61% 26%) 0%,
              hsl(281deg 63% 28%) 21%,
              hsl(294deg 64% 29%) 30%,
              hsl(306deg 68% 31%) 39%,
              hsl(315deg 73% 36%) 46%,
              hsl(321deg 75% 40%) 54%,
              hsl(327deg 74% 45%) 61%,
              hsl(333deg 72% 50%) 69%,
              hsl(339deg 85% 56%) 79%,
              hsl(345deg 100% 62%) 100%
            );

            animation: ${glowSpin} 12s infinite linear;
            animation-delay: -6s;
          }
        `
      : css`
          z-index: 1;
        `}

  ${({ isTarget }) =>
    isTarget &&
    css`
      z-index: 10;

      :hover {
        :before {
          content: '';

          position: absolute;
          z-index: -1;
          top: -50%;
          left: -50%;
          transform-origin: bottom right;

          width: 100%;
          height: 100%;

          background-image: linear-gradient(
            0deg,
            hsl(345deg 100% 62%) 0%,
            hsl(347deg 99% 64%) 11%,
            hsl(349deg 97% 66%) 22%,
            hsl(351deg 95% 67%) 33%,
            hsl(352deg 93% 69%) 44%,
            hsl(354deg 91% 70%) 56%,
            hsl(356deg 88% 71%) 67%,
            hsl(357deg 85% 72%) 78%,
            hsl(359deg 81% 73%) 89%,
            hsl(0deg 77% 74%) 100%
          );

          animation: ${glowSpin} 12s infinite linear;
        }

        :after {
          content: '';

          position: absolute;
          z-index: -1;
          top: -50%;
          left: -50%;
          transform-origin: bottom right;

          width: 100%;
          height: 100%;

          background-image: linear-gradient(
            0deg,
            hsl(345deg 100% 62%) 0%,
            hsl(347deg 99% 64%) 11%,
            hsl(349deg 97% 66%) 22%,
            hsl(351deg 95% 67%) 33%,
            hsl(352deg 93% 69%) 44%,
            hsl(354deg 91% 70%) 56%,
            hsl(356deg 88% 71%) 67%,
            hsl(357deg 85% 72%) 78%,
            hsl(359deg 81% 73%) 89%,
            hsl(0deg 77% 74%) 100%
          );

          animation: ${glowSpin} 12s infinite linear;
          animation-delay: -6s;
        }
      }
    `}

  ${({ isActionTarget }) =>
    isActionTarget &&
    css`
      animation: ${shake} ${actionAnimationDuration}ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    `}

    ${({ isActionInitiator }) =>
    isActionInitiator &&
    css`
      animation: ${acting} 500ms linear 1;
    `}
`

export const CardInner = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.black};
`

export const CardInfoInner = styled(motion.div).attrs({
  key: 'info',
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
})`
  position: relative;

  overflow: auto;

  height: 100%;
  max-height: 100%;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1e1939;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.white_50};
  }
`

export const CancelOverlay = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
})`
  cursor: pointer;

  position: absolute;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.black_90};

  svg {
    pointer-events: none;
    user-select: none;

    aspect-ratio: 1;
    width: 30%;
  }
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
  padding-top: 48px;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1e1939;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.white_50};
  }
`

export const CardActionsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px;
`

export const CardTitle = styled.span`
  position: absolute;
  z-index: 5;
  top: 8px;

  display: flex;
  justify-content: center;

  width: 100%;

  font-weight: 500;
`

export const BackButton = styled(C.Control)`
  position: absolute;
  z-index: 10;
  top: 8px;
  left: 8px;
`

export const EditButton = styled(C.Control)`
  position: absolute;
  z-index: 10;
  top: 8px;
  right: 8px;
`

export const CardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px;
`

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  box-shadow: 0 69px 44px 2px rgba(34, 60, 80, 71%) inset;
`

export const CardAction = styled(C.Control)`
  position: absolute;
  z-index: 5;
  top: calc(100% - 32px);
  right: 8px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
`

export const CardAvatar = styled.img`
  overflow: hidden;

  width: 100%;
  height: 100%;
  max-height: 360px;

  opacity: 0.75;
  object-fit: cover;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`

export const CardFrontActions = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-top: 8px;

  border-top: 1px dashed ${({ theme }) => theme.colors.primary};
`
