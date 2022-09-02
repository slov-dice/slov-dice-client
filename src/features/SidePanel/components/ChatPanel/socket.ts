import { createAsyncThunk } from '@reduxjs/toolkit'

import { setLobbyMessage, setLobbyMessages } from './slice'

import { E_Subscribe, I_SubscriptionData } from 'models/socket/lobbyChat'
import {
  E_Subscribe as E_LRSubscribe,
  I_SubscriptionData as I_LRSubscriptionData,
} from 'models/socket/lobbyRooms'
import { socket } from 'services/socket'
import { setRoomMessage } from 'store/room'

export const subscribe = createAsyncThunk('chatPanel', async (_, { dispatch }) => {
  socket.on(
    E_Subscribe.getLobbyMessages,
    (data: I_SubscriptionData[E_Subscribe.getLobbyMessages]) => {
      dispatch(setLobbyMessages(data))
    },
  )

  socket.on(
    E_Subscribe.getLobbyMessage,
    (data: I_SubscriptionData[E_Subscribe.getLobbyMessage]) => {
      dispatch(setLobbyMessage(data))
    },
  )

  socket.on(
    E_LRSubscribe.getRoomMessage,
    (data: I_LRSubscriptionData[E_LRSubscribe.getRoomMessage]) => {
      dispatch(setRoomMessage(data))
    },
  )
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getLobbyMessages)
  socket.off(E_Subscribe.getLobbyMessage)
  socket.off(E_LRSubscribe.getRoomMessage)
}
