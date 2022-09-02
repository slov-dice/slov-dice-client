import { ChangeEvent, useLayoutEffect, useState } from 'react'

import { emitRequestLobbyChat, emitSendLobbyMessage, emitSendRoomMessage } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { Button } from 'components/Buttons'
import { ChatField } from 'components/InputFields'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const ChatPanel = () => {
  const dispatch = useStoreDispatch()

  const { lobbyMessages, roomMessages, roomId } = useStoreSelector((state) => ({
    lobbyMessages: state.chatPanel.lobbyMessages,
    roomMessages: state.room.messages,
    roomId: state.room.id,
  }))

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(emitRequestLobbyChat())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  const [message, setMessage] = useState('')
  const [isLobbyChat, setIsLobbyChat] = useState(true)

  const handleChangeMessage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage(target.value)
  }

  const handleSend = () => {
    if (isLobbyChat) {
      dispatch(emitSendLobbyMessage({ text: message }))
    } else if (roomId) {
      dispatch(emitSendRoomMessage({ text: message, roomId }))
    } else {
      alert('Вы не в комнате')
    }
    setMessage('')
  }

  const handleOpenLobbyChat = () => {
    setIsLobbyChat(true)
  }

  const handleOpenRoomChat = () => {
    setIsLobbyChat(false)
  }

  return (
    <S.ChatPanel>
      <span>Chat</span>
      <div>
        <Button mod={Button.mod.secondary} onClick={handleOpenLobbyChat}>
          LOBBY
        </Button>
        <Button mod={Button.mod.secondary} onClick={handleOpenRoomChat}>
          ROOM
        </Button>
      </div>
      <pre style={{ overflow: 'auto', height: 500 }}>
        {isLobbyChat
          ? lobbyMessages.length
            ? JSON.stringify(lobbyMessages, undefined, 2)
            : '...'
          : roomMessages.length
          ? JSON.stringify(roomMessages, undefined, 2)
          : '...'}
      </pre>
      <ChatField value={message} onChange={handleChangeMessage} />{' '}
      <Button onClick={handleSend}>Send</Button>
    </S.ChatPanel>
  )
}
