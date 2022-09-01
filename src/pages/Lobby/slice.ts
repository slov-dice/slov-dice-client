import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_PreviewRoom } from 'models/app'
import { E_Emit, I_SubscriptionData, E_Subscribe } from 'models/socket/lobbyRooms'
import { socket } from 'services/socket'

interface I_InitialState {
  rooms: I_PreviewRoom[]
}

const initialState: I_InitialState = {
  rooms: [],
}

export const lobbyPageSlice = createSlice({
  name: 'lobbyPage',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<I_SubscriptionData[E_Subscribe.getPreviewRooms]>) => {
      state.rooms = action.payload.previewRooms
    },
    updateRoom: (state, action: PayloadAction<I_SubscriptionData[E_Subscribe.getPreviewRoom]>) => {
      const index = state.rooms.findIndex((room) => room.id === action.payload.previewRoom.id)

      // Если комната не найдена
      if (index < 0) {
        // Добавляем комнату
        state.rooms.unshift(action.payload.previewRoom)
        return
      }

      // Если комната пустая
      if (action.payload.previewRoom.currentSize === 0) {
        // Удаляем комнату
        state.rooms.splice(index, 1)
        return
      }

      // Обновляем
      state.rooms[index] = action.payload.previewRoom
    },

    emitRequestPreviewRooms: () => {
      socket.emit(E_Emit.requestPreviewRooms)
    },
  },
})

export const { setRooms, updateRoom, emitRequestPreviewRooms } = lobbyPageSlice.actions
