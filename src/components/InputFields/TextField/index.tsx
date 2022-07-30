import { ChangeEventHandler } from 'react'

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

export const TextField = (props: TextFieldProps) => {
  const { fullWidth = false } = props
  return <S.Input {...props} fullWidth={fullWidth} />
}
