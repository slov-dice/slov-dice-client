import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { E_AuthEmit, I_EmitPayload, E_AuthSubscribe, I_SubscriptionData } from './models/socket'

import { socket } from 'services/socket'
import { LocalStorage } from 'utils/helpers/localStorage'

export const getRestoreCheckEmail = createAsyncThunk('auth/restoreCheckEmail', async () => {
  socket.on(
    E_AuthSubscribe.getRestoreCheckEmail,
    (data: I_SubscriptionData[E_AuthSubscribe.getRestoreCheckEmail]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
    },
  )
})

export const restoreUnsubscribe = () => {
  socket.off(E_AuthSubscribe.getRestoreCheckEmail)
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    emitRestoreCheckEmail: (
      _,
      action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreCheckEmail]>,
    ) => {
      socket.emit(E_AuthEmit.restoreCheckEmail, action.payload)
    },
    emitRestoreCheckCode: (
      _,
      action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreCheckCode]>,
    ) => {
      socket.emit(E_AuthEmit.restoreCheckCode, action.payload.code)
    },
    emitRestoreChangePassword: (
      _,
      action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreChangePassword]>,
    ) => {
      socket.emit(E_AuthEmit.restoreChangePassword, action.payload.password)
    },
  },
})

export const { emitRestoreCheckEmail, emitRestoreCheckCode, emitRestoreChangePassword } =
  authSlice.actions

export default authSlice
