import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { ButtonVariants } from '.'

interface ButtonProps {
  $onlyIcon: boolean
  $variants: ButtonVariants
  fullWidth: boolean
}

export const Button = styled(motion.button)<ButtonProps>`
  cursor: pointer;
  user-select: none;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 54px;
  max-height: 100%;
  padding: 0 16px;

  font-size: 21px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_10};
  border: none;
  border-radius: 8px;

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : css`
          width: fit-content;
        `}

  ${({ theme, $variants }) => {
    switch ($variants) {
      case ButtonVariants.primary:
        return css`
          box-shadow: rgba(0, 0, 0, 0.5) 0 3px 7px -3px, 0 4px 0 0 ${theme.colors.crimson};
        `
      case ButtonVariants.secondary:
        return css`
          box-shadow: rgba(0, 0, 0, 0.5) 0 3px 7px -3px, 0 6px 0 0 ${theme.colors.cobaltBlue};
        `
    }
  }};

  :focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.crimson};
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;

    fill: ${({ theme }) => theme.colors.crimson};

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
            top: 18px;
          `}
  }
`
