import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { setRooms, updateRoom } from './slice'

import { E_Subscribe, I_SubscriptionData } from 'models/socket/lobbyRooms'
import { socket } from 'services/socket'
import { joinRoom } from 'store/profile'
import { setRoom } from 'store/room'
import { LocalStorage } from 'utils/helpers/localStorage'

export const subscribe = createAsyncThunk('lobbyRooms', async (_, { dispatch }) => {
  socket.on(
    E_Subscribe.getPreviewRooms,
    (data: I_SubscriptionData[E_Subscribe.getPreviewRooms]) => {
      dispatch(setRooms(data))
    },
  )

  socket.on(E_Subscribe.getPreviewRoom, (data: I_SubscriptionData[E_Subscribe.getPreviewRoom]) => {
    dispatch(updateRoom(data))
  })

  socket.on(E_Subscribe.getFullRoom, (data: I_SubscriptionData[E_Subscribe.getFullRoom]) => {
    console.log('lobby', data)
    const language = LocalStorage.getLanguage()
    const message = data.message[language]
    toast[data.status](message)

    if (!data.fullRoom) return
    dispatch(setRoom(data.fullRoom))
    dispatch(joinRoom())
  })
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getPreviewRooms)
  socket.off(E_Subscribe.getPreviewRoom)
  socket.off(E_Subscribe.getFullRoom)
}
