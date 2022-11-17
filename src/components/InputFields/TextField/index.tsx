import { ChangeEventHandler, forwardRef } from 'react'

import * as S from './styles'

interface I_TextFieldProps {
  value?: string
  name?: string
  placeholder?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  type?: 'text'
  fullWidth?: boolean
  // onFocus?: FocusEventHandler<HTMLInputElement>
  // onBlur?: FocusEventHandler<HTMLInputElement>
}

const TextFieldComponent = forwardRef((props: I_TextFieldProps, ref: any) => {
  const { fullWidth = false } = props
  return <S.Input {...props} ref={ref} fullWidth={fullWidth} />
})

TextFieldComponent.displayName = 'TextField'

export const TextField = TextFieldComponent
