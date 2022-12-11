import { ChangeEventHandler, forwardRef, KeyboardEventHandler } from 'react'

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

const ChatFieldComponent = forwardRef<HTMLInputElement, ChatFieldProps>((props, ref) => {
  return <S.Input {...props} ref={ref} />
})

ChatFieldComponent.displayName = 'ChatField'

export const ChatField = ChatFieldComponent
