import styled, { css } from 'styled-components'

import { E_TextFieldSize } from '.'

import { T_StyledVariants } from 'models/styled'

export const Input = styled.input<{ fullWidth: boolean; $size: E_TextFieldSize }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '180px')};
  max-width: 100%;
  height: 38px;
  max-height: 100%;
  padding: 8px 12px;

  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_05};
  border: none;
  border-radius: 8px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 10%) 0 6px 12px -2px, rgba(0, 0, 0, 40%) 0 3px 7px -3px;

  ${({ $size }) => inputSizes[$size]};

  ::placeholder {
    color: ${({ theme }) => theme.colors.white_50};
  }
`

const inputSizes: T_StyledVariants<E_TextFieldSize> = {
  lg: css`
    height: 56px;
  `,
  md: css`
    height: 48px;
  `,
  sm: css`
    height: 42px;
  `,
  xs: css`
    height: 36px;
  `,
}
