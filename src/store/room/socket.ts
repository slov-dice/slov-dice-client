import { createAsyncThunk } from '@reduxjs/toolkit'

import { E_Subscribe, I_SubscriptionData } from 'models/shared/socket/lobbyRooms'
import { socket } from 'services/socket'
import { joinRoom } from 'store/profile'
import { roomActions } from 'store/room'

export const subscribe = createAsyncThunk('room', async (_, { dispatch }) => {
  socket.on(
    E_Subscribe.getFullRoomRejoin,
    (data: I_SubscriptionData[E_Subscribe.getFullRoomRejoin]) => {
      dispatch(roomActions.setRoom(data.fullRoom))
      dispatch(joinRoom())
    },
  )
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getFullRoomRejoin)
}
