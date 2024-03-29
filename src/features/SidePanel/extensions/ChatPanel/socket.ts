import { createAsyncThunk } from '@reduxjs/toolkit'

import { chatPanelActions } from './slice'

import { E_Subscribe, I_SubscriptionData } from 'models/shared/socket/lobbyChat'
import {
  E_Subscribe as E_LRSubscribe,
  I_SubscriptionData as I_LRSubscriptionData,
} from 'models/shared/socket/lobbyRooms'
import { socket } from 'services/socket'
import { roomActions } from 'store/room'

export const subscribe = createAsyncThunk('chatPanel', async (_, { dispatch }) => {
  socket.on(
    E_Subscribe.getLobbyMessages,
    (data: I_SubscriptionData[E_Subscribe.getLobbyMessages]) => {
      dispatch(chatPanelActions.setLobbyMessages(data))
    },
  )

  socket.on(
    E_Subscribe.getLobbyMessage,
    (data: I_SubscriptionData[E_Subscribe.getLobbyMessage]) => {
      dispatch(chatPanelActions.setLobbyMessage(data))
    },
  )

  socket.on(
    E_LRSubscribe.getRoomMessage,
    (data: I_LRSubscriptionData[E_LRSubscribe.getRoomMessage]) => {
      dispatch(roomActions.setRoomMessage(data))
    },
  )

  socket.on(E_LRSubscribe.getRoomChat, (data: I_LRSubscriptionData[E_LRSubscribe.getRoomChat]) => {
    dispatch(roomActions.setRoomChat(data))
  })
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getLobbyMessages)
  socket.off(E_Subscribe.getLobbyMessage)
  socket.off(E_LRSubscribe.getRoomMessage)
  socket.off(E_LRSubscribe.getRoomChat)
}
