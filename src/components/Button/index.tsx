import { PropsWithChildren } from 'react'

import * as S from './styles'

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

interface ButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit'
  onlyIcon?: boolean
  variants?: ButtonVariants
  rounded?: boolean
}

const ButtonComponent = ({
  children,
  onClick,
  type = 'button',
  onlyIcon = false,
  variants = ButtonVariants.primary,
  rounded = false,
}: PropsWithChildren<ButtonProps>) => (
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

ButtonComponent.variants = ButtonVariants

export const Button = ButtonComponent
