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

  display: flex;
  justify-content: center;

  width: 28px;
  height: 28px;
  padding: 0 4px;

  border-radius: 15%;

  fill: ${({ theme }) => theme.colors.white};

  & > svg {
    width: 100%;
    height: 100%;
  }
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

export const BaseTooltip = styled.div`
  width: 150px;
  height: auto;
`
