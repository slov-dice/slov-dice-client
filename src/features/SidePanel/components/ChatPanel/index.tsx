import { ChangeEvent, useLayoutEffect, useState } from 'react'

import { emitRequestLobbyChat, emitSendLobbyMessage } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { Button } from 'components/Buttons'
import { ChatField } from 'components/InputFields'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const ChatPanel = () => {
  const dispatch = useStoreDispatch()

  const lobbyMessages = useStoreSelector((state) => state.chatPanel.lobbyMessages)

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(emitRequestLobbyChat())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  const [message, setMessage] = useState('')

  const handleChangeMessage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage(target.value)
  }

  const handleSend = () => {
    dispatch(emitSendLobbyMessage({ text: message }))
    setMessage('')
  }

  return (
    <S.ChatPanel>
      <span>Chat</span>
      <div>
        <span>LOBBY</span> | <span>ROOM</span>
      </div>
      <pre style={{ overflow: 'auto', height: 600 }}>
        {lobbyMessages.length ? JSON.stringify(lobbyMessages, undefined, 2) : '...'}
      </pre>
      <ChatField value={message} onChange={handleChangeMessage} />{' '}
      <Button onClick={handleSend}>Send</Button>
    </S.ChatPanel>
  )
}
