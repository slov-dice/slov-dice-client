import { ChangeEventHandler, forwardRef } from 'react'

import * as S from './styles'

export enum E_TextFieldSize {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs',
}

interface I_TextFieldProps {
  value?: string
  name?: string
  placeholder?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  type?: 'text'
  fullWidth?: boolean
  size?: E_TextFieldSize
}

const TextFieldComponent = forwardRef<HTMLInputElement, I_TextFieldProps>((props, ref) => {
  const { fullWidth = false, size = E_TextFieldSize.md, ...restProps } = props
  return <S.Input {...restProps} ref={ref} fullWidth={fullWidth} $size={size} />
})

TextFieldComponent.displayName = 'TextField'

export const TextField = TextFieldComponent
