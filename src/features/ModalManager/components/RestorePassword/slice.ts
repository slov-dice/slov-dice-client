import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_ModalContent, E_StatusName, I_InitialState } from './models'

import { E_Emit, I_EmitPayload } from 'models/socket/restore'
import { socket } from 'services/socket'

const initialState: I_InitialState = {
  content: E_ModalContent.emailConfirm,
  statuses: {
    checkEmail: {
      isLoading: false,
      isCooldown: false,
    },
    checkCode: {
      isLoading: false,
    },
    changePassword: {
      isLoading: false,
    },
  },
}

export const restoreSlice = createSlice({
  name: 'restore',
  initialState: initialState,
  reducers: {
    emitRestoreCheckEmail: (
      state,
      action: PayloadAction<I_EmitPayload[E_Emit.restoreCheckEmail]>,
    ) => {
      state.statuses.checkEmail.isLoading = true
      socket.emit(E_Emit.restoreCheckEmail, action.payload)
    },
    emitRestoreCheckCode: (
      state,
      action: PayloadAction<I_EmitPayload[E_Emit.restoreCheckCode]>,
    ) => {
      state.statuses.checkCode.isLoading = true
      socket.emit(E_Emit.restoreCheckCode, action.payload)
    },
    emitRestoreChangePassword: (
      state,
      action: PayloadAction<I_EmitPayload[E_Emit.restoreChangePassword]>,
    ) => {
      state.statuses.changePassword.isLoading = true
      socket.emit(E_Emit.restoreChangePassword, action.payload)
    },
    setRestoreModalContent: (state, action: PayloadAction<E_ModalContent>) => {
      state.content = action.payload
    },
    setStatus: (state, action: PayloadAction<{ status: E_StatusName; value: boolean }>) => {
      state.statuses[action.payload.status].isLoading = action.payload.value
    },
    setCooldown: (state, action: PayloadAction<boolean>) => {
      state.statuses.checkEmail.isCooldown = action.payload
    },
  },
})

export const {
  emitRestoreCheckEmail,
  emitRestoreCheckCode,
  emitRestoreChangePassword,
  setRestoreModalContent,
  setStatus,
  setCooldown,
} = restoreSlice.actions
