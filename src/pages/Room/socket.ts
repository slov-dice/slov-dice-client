import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { E_Subscribe, I_SubscriptionData } from 'models/socket/lobbyRooms'
import { socket } from 'services/socket'
import { setRoom } from 'store/room'
import { LocalStorage } from 'utils/helpers/localStorage'

export const subscribe = createAsyncThunk('room', async (_, { dispatch }) => {
  socket.on(E_Subscribe.getFullRoom, (data: I_SubscriptionData[E_Subscribe.getFullRoom]) => {
    console.log('room', data)
    if (data.message && data.status) {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
    }

    if (!data.fullRoom) return
    dispatch(setRoom(data.fullRoom))
  })
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getFullRoom)
}
