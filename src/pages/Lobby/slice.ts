import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_PreviewRoom } from 'models/app'
import { E_Emit, I_EmitPayload, I_SubscriptionData, E_Subscribe } from 'models/socket/lobbyRooms'
import { socket } from 'services/socket'

interface I_InitialState {
  rooms: I_PreviewRoom[]
}

const initialState: I_InitialState = {
  rooms: [],
}

export const lobbyRoomsSlice = createSlice({
  name: 'lobbyRooms',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<I_SubscriptionData[E_Subscribe.getPreviewRooms]>) => {
      state.rooms = action.payload.previewRooms
    },
    updateRoom: (state, action: PayloadAction<I_SubscriptionData[E_Subscribe.getPreviewRoom]>) => {
      const index = state.rooms.findIndex((room) => room.id === action.payload.previewRoom.id)

      // Если комната не найдена
      if (index < 0) {
        // Добавляем
        state.rooms.unshift(action.payload.previewRoom)
        return
      }

      // Обновляем
      state.rooms[index] = action.payload.previewRoom
    },
    emitCreateRoom: (_, action: PayloadAction<I_EmitPayload[E_Emit.createRoom]>) => {
      socket.emit(E_Emit.createRoom, action.payload)
    },
    emitJoinRoom: (_, action: PayloadAction<I_EmitPayload[E_Emit.joinRoom]>) => {
      socket.emit(E_Emit.joinRoom, action.payload)
    },
    emitRequestPreviewRooms: () => {
      socket.emit(E_Emit.requestPreviewRooms)
    },
  },
})

export const { setRooms, updateRoom, emitCreateRoom, emitJoinRoom, emitRequestPreviewRooms } =
  lobbyRoomsSlice.actions
