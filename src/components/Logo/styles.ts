import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { wrapperAttrs } from './motion'

export const Wrapper = styled(motion.div).attrs(({ theme }) => wrapperAttrs(theme))<{
  $relative: boolean
  $isHeader: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -6px;

  ${({ $relative }) =>
    $relative
      ? css`
          position: relative;
        `
      : css`
          position: absolute;
          right: 50%;
          transform: translate(50%);
        `}

  ${({ $isHeader }) =>
    $isHeader &&
    css`
      @media ${({ theme }) => theme.media.sm} {
        display: none;
      }
    `}

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.primary};
`

export const TextLink = styled(Link)`
  cursor: pointer;
  user-select: none;
`
