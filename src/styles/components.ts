import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { titleAttrs } from './motion'

export const Title = styled(motion.span).attrs(titleAttrs)`
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
`

interface I_DividerProps {
  h?: number
  md?: number

  decorated?: boolean
}

export const Divider = styled.div<I_DividerProps>`
  position: relative;

  height: ${({ h = 32 }) => h}px;

  ${({ theme, decorated }) =>
    decorated
      ? css`
          &::before {
            content: '';

            position: absolute;
            top: 50%;

            height: 1px;
            width: 100%;
            background-color: ${theme.colors.primary_50};
          }
        `
      : css``}

  @media ${({ theme }) => theme.media.md} {
    height: ${({ md = 16 }) => md}px;
  }
`
