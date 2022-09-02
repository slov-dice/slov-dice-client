import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_Emit, I_EmitPayload } from 'models/socket/lobbyUsers'
import { socket } from 'services/socket'

import type { I_Profile } from 'models/app'

const initialState: I_Profile = {
  id: 0,
  email: '',
  nickname: '',
  statuses: {
    inRoom: false,
    isAuth: false,
  },
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (_, action: PayloadAction<I_Profile>) => action.payload,
    logout: (_, actions: PayloadAction<I_EmitPayload[E_Emit.logoutLobbyUser]>) => {
      socket.emit(E_Emit.logoutLobbyUser, actions.payload)
      return initialState
    },
    joinRoom: (state) => {
      state.statuses.inRoom = true
    },
    leaveRoom: (state) => {
      state.statuses.inRoom = false
    },
  },
})

export const { setProfile, logout, joinRoom, leaveRoom } = profileSlice.actions
