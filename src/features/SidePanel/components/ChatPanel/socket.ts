import { createAsyncThunk } from '@reduxjs/toolkit'

import { setLobbyMessage, setLobbyMessages } from './slice'

import { E_Subscribe, I_SubscriptionData } from 'models/socket/lobbyChat'
import { socket } from 'services/socket'

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
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getLobbyMessages)
  socket.off(E_Subscribe.getLobbyMessage)
}
