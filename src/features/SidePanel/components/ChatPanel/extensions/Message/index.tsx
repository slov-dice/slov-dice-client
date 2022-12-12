import Tippy from '@tippyjs/react'

import * as S from './styles'

interface I_ChatMessageProps {
  author: string
  withAuthor: boolean
  text: string
  isAuthor: boolean
  command?: string
}

export const ChatMessage = ({
  author,
  withAuthor,
  isAuthor,
  text,
  command,
}: I_ChatMessageProps) => {
  return (
    <S.MessageWrapper isAuthor={isAuthor}>
      {withAuthor && <S.MessageAuthor>{author}</S.MessageAuthor>}
      <S.MessageText isAuthor={isAuthor} isCommand={Boolean(command)} withAuthor={withAuthor}>
        {command ? (
          <Tippy content={command}>
            <S.Text isCommand={Boolean(command)}>{text}</S.Text>
          </Tippy>
        ) : (
          <S.Text isCommand={Boolean(command)}>{text}</S.Text>
        )}
      </S.MessageText>
    </S.MessageWrapper>
  )
}
