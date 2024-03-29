import { createAsyncThunk } from '@reduxjs/toolkit'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-toastify'

import { setRooms, updateRoom } from './slice'

import { modalManagerActions } from 'features/ModalManager/slice'
import { E_Subscribe, I_SubscriptionData } from 'models/shared/socket/lobbyRooms'
import { socket } from 'services/socket'
import { appActions } from 'store/app'
import { E_AppLoader } from 'store/app/data'
import { joinRoom } from 'store/profile'
import { roomActions } from 'store/room'
import { LocalStorage } from 'utils/helpers/localStorage'

export const subscribe = createAsyncThunk(
  'lobbyPage',
  async (navigate: NavigateFunction, { dispatch }) => {
    socket.on(
      E_Subscribe.getPreviewRooms,
      (data: I_SubscriptionData[E_Subscribe.getPreviewRooms]) => {
        dispatch(setRooms(data))
      },
    )

    socket.on(
      E_Subscribe.getPreviewRoom,
      (data: I_SubscriptionData[E_Subscribe.getPreviewRoom]) => {
        dispatch(updateRoom(data))
      },
    )

    socket.on(E_Subscribe.getFullRoom, (data: I_SubscriptionData[E_Subscribe.getFullRoom]) => {
      if (data.message && data.status) {
        const language = LocalStorage.getLanguage()
        const message = data.message[language]
        toast[data.status](message)
      }

      setTimeout(() => {
        dispatch(appActions.setLoading({ loader: E_AppLoader.isRoomCreating, status: false }))
        dispatch(appActions.setLoading({ loader: E_AppLoader.isRoomJoining, status: false }))
      }, 500)

      if (!data.fullRoom) return
      dispatch(modalManagerActions.closeModal())
      dispatch(roomActions.setRoom(data.fullRoom))
      dispatch(joinRoom())
      navigate(`/room/${data.fullRoom.id}`)
    })
  },
)

export const unsubscribe = () => {
  socket.off(E_Subscribe.getPreviewRooms)
  socket.off(E_Subscribe.getPreviewRoom)
  socket.off(E_Subscribe.getFullRoom)
}
