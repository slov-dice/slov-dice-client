import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Title = styled(motion.span)`
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
`

interface DividerProps {
  h?: number
  hmd?: number

  decorated?: boolean
}

export const Divider = styled.div<DividerProps>`
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
    height: ${({ hmd = 16 }) => hmd}px;
  }
`
