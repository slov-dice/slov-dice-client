import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { E_ModalContent, E_StatusName, I_InitialState } from './models'
import { E_AuthEmit, I_EmitPayload, E_AuthSubscribe, I_SubscriptionData } from './models/socket'

import { closeModal } from 'features/Modals/slice'
import { E_StatusServerMessage } from 'models/app'
import { socket } from 'services/socket'
import { LocalStorage } from 'utils/helpers/localStorage'

export const subscribe = createAsyncThunk('restore/restoreCheckEmail', async (_, { dispatch }) => {
  socket.on(
    E_AuthSubscribe.getRestoreCheckEmail,
    (data: I_SubscriptionData[E_AuthSubscribe.getRestoreCheckEmail]) => {
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
    E_AuthSubscribe.getRestoreCheckCode,
    (data: I_SubscriptionData[E_AuthSubscribe.getRestoreCheckCode]) => {
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
    E_AuthSubscribe.getRestoreChangePassword,
    (data: I_SubscriptionData[E_AuthSubscribe.getRestoreChangePassword]) => {
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
  socket.off(E_AuthSubscribe.getRestoreCheckEmail)
  socket.off(E_AuthSubscribe.getRestoreCheckCode)
  socket.off(E_AuthSubscribe.getRestoreChangePassword)
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
      action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreCheckEmail]>,
    ) => {
      state.statuses.checkEmail.isLoading = true
      socket.emit(E_AuthEmit.restoreCheckEmail, action.payload)
    },
    emitRestoreCheckCode: (
      state,
      action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreCheckCode]>,
    ) => {
      state.statuses.checkCode.isLoading = true
      socket.emit(E_AuthEmit.restoreCheckCode, action.payload)
    },
    emitRestoreChangePassword: (
      state,
      action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreChangePassword]>,
    ) => {
      state.statuses.changePassword.isLoading = true
      socket.emit(E_AuthEmit.restoreChangePassword, action.payload)
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
