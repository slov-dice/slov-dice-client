import { ChangeEvent, KeyboardEvent, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { instanceChatOptions } from './data'
import { ChatMessage } from './extensions/Message'
import { chatPanelActions } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import D12Icon from 'assets/icons/app/dice-d12.svg'
import D20Icon from 'assets/icons/app/dice-d20.svg'
import D4Icon from 'assets/icons/app/dice-d4.svg'
import D6Icon from 'assets/icons/app/dice-d6.svg'
import D8Icon from 'assets/icons/app/dice-d8.svg'
import SendIcon from 'assets/icons/app/send.svg'
import { Button } from 'components/Buttons'
import { ChatField } from 'components/InputFields'
import { Switch, T_SwitchOption } from 'components/Switch'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_ChatType, E_RoomMessageType } from 'models/shared/app'
import { roomActions } from 'store/room'

export const ChatPanel = () => {
  const dispatch = useStoreDispatch()
  const { lobbyMessages, roomMessages, roomId, profileId } = useStoreSelector((store) => ({
    lobbyMessages: store.chatPanel.lobbyMessages,
    roomMessages: store.room.messages,
    roomId: store.room.id,
    profileId: store.profile.id,
  }))

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(chatPanelActions.emitRequestLobbyChat())
    dispatch(roomActions.emitRequestRoomChat())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  const [message, setMessage] = useState('')
  const [chatType, setChatType] = useState<E_ChatType>(E_ChatType.lobby)
  const [chatOptions, setChatOptions] = useState(instanceChatOptions)
  const chatFieldRef = useRef<HTMLInputElement>(null)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const handleChangeMessage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage(target.value)
  }

  const handleSend = () => {
    if (message.trim().length) {
      if (chatType === E_ChatType.lobby) {
        dispatch(chatPanelActions.emitSendLobbyMessage({ text: message }))
      } else if (roomId) {
        dispatch(chatPanelActions.emitSendRoomMessage({ text: message, roomId }))
      }
      setMessage('')
    }
  }

  const handleSwitchChatType = (option: T_SwitchOption) => {
    setChatType(option.value as E_ChatType)
  }

  const handleCommandToMessage = (command: string) => () => {
    if (chatFieldRef.current) {
      setMessage(command)
      chatFieldRef.current.focus()
    }
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend()
    }
  }

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [lobbyMessages, roomMessages])

  useEffect(() => {
    if (roomId) {
      setChatOptions(instanceChatOptions)
      setChatType(instanceChatOptions[1].value as E_ChatType)
    } else {
      setChatOptions([instanceChatOptions[0]])
      setChatType(instanceChatOptions[0].value as E_ChatType)
    }
  }, [roomId])

  return (
    <S.ChatPanel>
      <S.Title>{t('sidePanels.chat.title')}</S.Title>
      <div>
        <Switch
          value={chatType}
          onChange={handleSwitchChatType}
          options={chatOptions}
          name='chatType'
        />
      </div>
      <S.ContentSection>
        <S.MessagesWrapper>
          {chatType === E_ChatType.lobby
            ? lobbyMessages.length
              ? lobbyMessages.map((message, index, messages) => (
                  <ChatMessage
                    key={message.id}
                    author={message.author}
                    withAuthor={messages[index - 1]?.authorId !== message.authorId}
                    isAuthor={profileId === message.authorId}
                    text={message.text}
                  />
                ))
              : '...'
            : roomMessages.length
            ? roomMessages.map((message, index, messages) => (
                <ChatMessage
                  key={message.id}
                  author={message.author}
                  withAuthor={messages[index - 1]?.authorId !== message.authorId}
                  isAuthor={profileId === message.authorId}
                  text={message.text}
                  command={message.type === E_RoomMessageType.command ? message.command : ''}
                />
              ))
            : '...'}
          <div ref={chatEndRef} />
        </S.MessagesWrapper>
        <div>
          <S.MessageFieldWrapper>
            <ChatField
              ref={chatFieldRef}
              value={message}
              onChange={handleChangeMessage}
              onKeyPress={handleKeyPress}
              placeholder={t('sidePanels.chat.fields.message')}
            />
            <Button onlyIcon mod={Button.mod.secondary} onClick={handleSend}>
              <SendIcon />
            </Button>
          </S.MessageFieldWrapper>

          {chatType === E_ChatType.room && (
            <S.CommandsActionsWrapper>
              <Button onlyIcon mod={Button.mod.secondary} onClick={handleCommandToMessage('/1d4')}>
                <D4Icon />
              </Button>
              <Button onlyIcon mod={Button.mod.secondary} onClick={handleCommandToMessage('/1d6')}>
                <D6Icon />
              </Button>
              <Button onlyIcon mod={Button.mod.secondary} onClick={handleCommandToMessage('/1d8')}>
                <D8Icon />
              </Button>
              <Button onlyIcon mod={Button.mod.secondary} onClick={handleCommandToMessage('/1d12')}>
                <D12Icon />
              </Button>
              <Button onlyIcon mod={Button.mod.secondary} onClick={handleCommandToMessage('/1d20')}>
                <D20Icon />
              </Button>
            </S.CommandsActionsWrapper>
          )}
        </div>
      </S.ContentSection>
    </S.ChatPanel>
  )
}
