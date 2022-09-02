import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_RoomType, I_FullRoom } from 'models/app'
import { E_Emit, I_EmitPayload, E_Subscribe, I_SubscriptionData } from 'models/socket/lobbyRooms'
import { socket } from 'services/socket'

const initialState: I_FullRoom = {
  id: '',
  name: '',
  password: '',
  authorId: 0,
  currentSize: 0,
  size: 0,
  type: E_RoomType.public,
  users: [],
  messages: [],
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom: (_, action: PayloadAction<I_FullRoom>) => action.payload,
    setRoomMessage: (
      state,
      action: PayloadAction<I_SubscriptionData[E_Subscribe.getRoomMessage]>,
    ) => {
      state.messages.unshift(action.payload.message)
    },
    emitCreateRoom: (_, action: PayloadAction<I_EmitPayload[E_Emit.createRoom]>) => {
      socket.emit(E_Emit.createRoom, action.payload)
    },
    emitJoinRoom: (_, action: PayloadAction<I_EmitPayload[E_Emit.joinRoom]>) => {
      socket.emit(E_Emit.joinRoom, action.payload)
    },
    emitLeaveRoom: (state) => {
      socket.emit(E_Emit.leaveRoom, { roomId: state.id })
      return initialState
    },
  },
})

export const { setRoom, setRoomMessage, emitCreateRoom, emitJoinRoom, emitLeaveRoom } =
  roomSlice.actions
