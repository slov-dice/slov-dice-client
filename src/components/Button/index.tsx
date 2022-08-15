import { PropsWithChildren } from 'react'

import * as S from './styles'

export enum E_ButtonMod {
  primary = 'primary',
  secondary = 'secondary',
}

interface I_ButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit'
  onlyIcon?: boolean
  mod?: E_ButtonMod
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
}: PropsWithChildren<I_ButtonProps>) => (
  <S.Button
    type={type}
    onClick={onClick}
    $mod={mod}
    $onlyIcon={onlyIcon}
    rounded={rounded}
    disabled={disabled}
  >
    {children}
  </S.Button>
)

ButtonComponent.mod = E_ButtonMod

export const Button = ButtonComponent
