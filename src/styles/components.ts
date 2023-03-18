import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { titleAttrs, controlAttrs } from './motion'

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

export const Control = styled(motion.div).attrs(({ theme }) => controlAttrs(theme))`
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center;

  width: 28px;
  height: 28px;
  padding: 0 4px;

  border-radius: 15%;

  fill: ${({ theme }) => theme.colors.white};
`

export const EditableInput = styled.input`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_10};
  border: none;
  outline: none;
`

export const LinkBlank = styled.a.attrs({
  rel: 'noreferrer',
  target: '_blank',
})`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary_80};
`

export const Img = styled.img`
  width: 100%;
  max-height: 520px;

  object-fit: contain;
  border: 2px solid ${({ theme }) => theme.colors.white_05};
  border-radius: 2px;
`

interface I_RowProps {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-evenly' | 'space-between' | 'space-around'
  align?: 'flex-start' | 'center' | 'flex-end'
}

export const Row = styled.div<I_RowProps>`
  display: flex;
  gap: 16px;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`

export const ParagraphPreLine = styled.p`
  white-space: pre-line;
`
