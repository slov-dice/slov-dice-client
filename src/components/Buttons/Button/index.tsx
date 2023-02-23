import { PropsWithChildren } from 'react'

import * as S from './styles'

export enum E_ButtonMod {
  primary = 'primary',
  secondary = 'secondary',
}

export enum E_ButtonSize {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs',
}

interface I_ButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit'
  onlyIcon?: boolean
  mod?: E_ButtonMod
  size?: E_ButtonSize
  rounded?: boolean
  disabled?: boolean
}

const ButtonComponent = ({
  children,
  onClick,
  type = 'button',
  onlyIcon = false,
  mod = E_ButtonMod.primary,
  rounded = false,
  disabled = false,
  size = E_ButtonSize.md,
}: PropsWithChildren<I_ButtonProps>) => (
  <S.Button
    type={type}
    onClick={onClick}
    $mod={mod}
    $onlyIcon={onlyIcon}
    $rounded={rounded}
    disabled={disabled}
    $size={size}
  >
    {children}
  </S.Button>
)

ButtonComponent.mod = E_ButtonMod
ButtonComponent.size = E_ButtonSize

export const Button = ButtonComponent
