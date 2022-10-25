import { ChangeEventHandler, forwardRef, RefObject } from 'react'

import * as S from './styles'

interface TextFieldProps {
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

const TextFieldComponent = forwardRef((props: TextFieldProps, ref: any) => {
  const { fullWidth = false } = props
  return <S.Input {...props} ref={ref} fullWidth={fullWidth} />
})

TextFieldComponent.displayName = 'TextField'

export const TextField = TextFieldComponent
