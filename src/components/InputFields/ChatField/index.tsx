import { ChangeEventHandler, KeyboardEventHandler } from 'react'

import * as S from './styles'

interface ChatFieldProps {
  value?: string
  name?: string
  placeholder?: string
  disabled?: boolean
  autoComplete?: 'on' | 'off'
  onChange?: ChangeEventHandler<HTMLInputElement>
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>
}

export const ChatField = (props: ChatFieldProps) => {
  return <S.Input {...props} />
}
