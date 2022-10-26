import { ChangeEventHandler, forwardRef } from 'react'

import * as S from './styles'

interface TextareaFieldProps {
  value?: string
  name?: string
  placeholder?: string
  disabled?: boolean
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  type?: 'text'
  fullWidth?: boolean
  // onFocus?: FocusEventHandler<HTMLInputElement>
  // onBlur?: FocusEventHandler<HTMLInputElement>
}

const TextareaFieldComponent = forwardRef((props: TextareaFieldProps, ref: any) => {
  const { fullWidth = false } = props
  return <S.Textarea {...props} rows={3} ref={ref} fullWidth={fullWidth} />
})

TextareaFieldComponent.displayName = 'TextAreaField'

export const TextareaField = TextareaFieldComponent
