import { PropsWithChildren } from 'react'

import * as S from './styles'

export enum E_ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

interface I_ButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit'
  onlyIcon?: boolean
  variants?: E_ButtonVariants
  rounded?: boolean
}

const ButtonComponent = ({
  children,
  onClick,
  type = 'button',
  onlyIcon = false,
  variants = E_ButtonVariants.primary,
  rounded = false,
}: PropsWithChildren<I_ButtonProps>) => (
  <S.Button
    type={type}
    whileHover={{ opacity: 0.75 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    $variants={variants}
    $onlyIcon={onlyIcon}
    rounded={rounded}
  >
    {children}
  </S.Button>
)

ButtonComponent.variants = E_ButtonVariants

export const Button = ButtonComponent
