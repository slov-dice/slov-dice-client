import { createAsyncThunk } from '@reduxjs/toolkit'

import { setUsers, updateUser } from './slice'

import { E_Subscribe, I_SubscriptionData } from 'models/socket/lobbyUsers'
import { socket } from 'services/socket'

export const subscribe = createAsyncThunk('usersPanel', async (_, { dispatch }) => {
  socket.on(E_Subscribe.getLobbyUsers, (data: I_SubscriptionData[E_Subscribe.getLobbyUsers]) => {
    dispatch(setUsers(data))
  })

  socket.on(E_Subscribe.getLobbyUser, (data: I_SubscriptionData[E_Subscribe.getLobbyUser]) => {
    dispatch(updateUser(data))
  })
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getLobbyUsers)
  socket.off(E_Subscribe.getLobbyUser)
}
