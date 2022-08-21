import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { E_ModalContent, E_StatusName, I_InitialState } from './models'

import { closeModal } from 'features/Modals/slice'
import { E_StatusServerMessage } from 'models/app'
import { E_Emit, I_EmitPayload, E_Subscribe, I_SubscriptionData } from 'models/socket/restore'
import { socket } from 'services/socket'
import { LocalStorage } from 'utils/helpers/localStorage'

export const subscribe = createAsyncThunk('restore/restoreCheckEmail', async (_, { dispatch }) => {
  socket.on(
    E_Subscribe.getRestoreCheckEmail,
    (data: I_SubscriptionData[E_Subscribe.getRestoreCheckEmail]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(setStatus({ status: E_StatusName.checkEmail, value: false }))

      if (data.status === E_StatusServerMessage.success) {
        dispatch(setCooldown(true))
      }
    },
  )

  socket.on(
    E_Subscribe.getRestoreCheckCode,
    (data: I_SubscriptionData[E_Subscribe.getRestoreCheckCode]) => {
      dispatch(setStatus({ status: E_StatusName.checkEmail, value: false }))

      if (data.status === E_StatusServerMessage.success) {
        dispatch(setRestoreModalContent(E_ModalContent.changePassword))
        return
      }

      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
    },
  )

  socket.on(
    E_Subscribe.getRestoreChangePassword,
    (data: I_SubscriptionData[E_Subscribe.getRestoreChangePassword]) => {
      dispatch(setStatus({ status: E_StatusName.checkEmail, value: false }))

      if (data.status === E_StatusServerMessage.success) {
        dispatch(closeModal())
      }

      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
    },
  )
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getRestoreCheckEmail)
  socket.off(E_Subscribe.getRestoreCheckCode)
  socket.off(E_Subscribe.getRestoreChangePassword)
}

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
