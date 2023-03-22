import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_Emit, I_EmitPayload } from 'models/shared/socket/lobbyUsers'
import { socket } from 'services/socket'
import { LocalStorage } from 'utils/helpers/localStorage'

import type { I_Profile } from 'models/shared/app'

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
    logout: (_, action: PayloadAction<I_EmitPayload[E_Emit.logoutLobbyUser]>) => {
      socket.emit(E_Emit.logoutLobbyUser, action.payload)
      LocalStorage.removeAccessToken()
      LocalStorage.removeRefreshToken()
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
export const profileActions = profileSlice.actions
