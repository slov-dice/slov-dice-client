import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { E_ModalContent } from './models'
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
    },
  )

  socket.on(
    E_AuthSubscribe.getRestoreCheckCode,
    (data: I_SubscriptionData[E_AuthSubscribe.getRestoreCheckCode]) => {
      if (data.status === E_StatusServerMessage.success) {
        dispatch(setContent(E_ModalContent.changePassword))
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
      console.log(data)

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

interface I_InitialState {
  content: E_ModalContent
}

const initialState: I_InitialState = {
  content: E_ModalContent.emailConfirm,
}

export const restoreSlice = createSlice({
  name: 'restore',
  initialState: initialState,
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
      socket.emit(E_AuthEmit.restoreCheckCode, action.payload)
    },
    emitRestoreChangePassword: (
      _,
      action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreChangePassword]>,
    ) => {
      socket.emit(E_AuthEmit.restoreChangePassword, action.payload)
    },
    setContent: (state, action: PayloadAction<E_ModalContent>) => {
      state.content = action.payload
    },
  },
})

export const {
  emitRestoreCheckEmail,
  emitRestoreCheckCode,
  emitRestoreChangePassword,
  setContent,
} = restoreSlice.actions
