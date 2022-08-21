import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { E_ButtonMod } from '.'

import { buttonAttrs } from './motion'

interface ButtonProps {
  $onlyIcon: boolean
  $mod: E_ButtonMod
  rounded: boolean
  disabled: boolean
}

export const Button = styled(motion.button).attrs<ButtonProps>(({ disabled }) =>
  buttonAttrs(disabled),
)<ButtonProps>`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;
  max-height: 100%;
  padding: 0 16px;

  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.white_50 : theme.colors.white)};

  background: ${({ theme }) => theme.colors.white_10};
  border: none;
  border-radius: ${({ rounded }) => (rounded ? 8 : 0)}px;

  ${({ theme, $mod, disabled }) => {
    switch ($mod) {
      case E_ButtonMod.primary:
        return css`
          box-shadow: rgba(0, 0, 0, 0.5) 0 3px 7px -3px,
            0 4px 0 0 ${disabled ? theme.colors.primary_50 : theme.colors.primary};
        `
      case E_ButtonMod.secondary:
        return css`
          box-shadow: rgba(0, 0, 0, 0.5) 0 3px 7px -3px, 0 6px 0 0 ${theme.colors.cobaltBlue};
        `
    }
  }};

  :focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;

    fill: ${({ theme }) => theme.colors.primary};

    ${({ $onlyIcon }) =>
      $onlyIcon
        ? css`
            position: relative;
            top: 0;
            left: 0;
          `
        : css`
            position: absolute;
            left: 24px;
            top: 14px;
          `}
  }
`
