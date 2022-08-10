import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { E_AuthContent } from './models'
import {
  E_AuthEmit,
  I_EmitPayload,
  E_AuthSubscribe,
  I_SubscriptionData,
} from './models/socket/socket'

import { socket } from 'services/socket'
import { LocalStorage } from 'utils/helpers/localStorage'

enum E_StatusName {
  emailCheck = 'emailCheck',
  codeCheck = 'codeCheck',
  changePassword = 'changePassword',
}

interface I_InitialState {
  isOpen: boolean
  content: E_AuthContent
  statuses: {
    [E_StatusName.emailCheck]: boolean
    [E_StatusName.codeCheck]: boolean
    [E_StatusName.changePassword]: boolean
  }
}

const initialState: I_InitialState = {
  isOpen: false,
  content: E_AuthContent.registrationEntry,
  statuses: {
    [E_StatusName.emailCheck]: false,
    [E_StatusName.codeCheck]: false,
    [E_StatusName.changePassword]: false,
  },
}

export const getRestoreCheckEmail = createAsyncThunk(
  'authForm/restoreCheckEmail',
  async (_, { dispatch }) => {
    socket.on(
      E_AuthSubscribe.getRestoreCheckEmail,
      (data: I_SubscriptionData[E_AuthSubscribe.getRestoreCheckEmail]) => {
        const language = LocalStorage.getLanguage()
        const message = data.message[language]

        if (data.isSuccess) {
          toast.success(message)
          dispatch(setStatus({ name: E_StatusName.emailCheck, status: data.isSuccess }))
          return
        }

        toast.error(message)
        dispatch(setStatus({ name: E_StatusName.emailCheck, status: data.isSuccess }))
      },
    )
  },
)

export const restoreUnsubscribe = () => {
  socket.off(E_AuthSubscribe.getRestoreCheckEmail)
}

export const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    switchAuthFormContent: (state, action: PayloadAction<E_AuthContent>) => {
      state.content = action.payload
    },
    openAuthForm: (state) => {
      state.isOpen = true
    },
    closeAuthForm: (state) => {
      state.isOpen = false
    },
    restoreCheckEmail: (_, action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreCheckEmail]>) => {
      socket.emit(E_AuthEmit.restoreCheckEmail, action.payload)
    },
    restoreCheckCode: (_, action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreCheckCode]>) => {
      socket.emit(E_AuthEmit.restoreCheckCode, action.payload.code)
    },
    restoreChangePassword: (
      _,
      action: PayloadAction<I_EmitPayload[E_AuthEmit.restoreChangePassword]>,
    ) => {
      socket.emit(E_AuthEmit.restoreChangePassword, action.payload.password)
    },
    setStatus: (state, action: PayloadAction<{ name: E_StatusName; status: boolean }>) => {
      state.statuses[action.payload.name] = action.payload.status
    },
  },
})

export const {
  switchAuthFormContent,
  openAuthForm,
  closeAuthForm,
  restoreCheckEmail,
  restoreCheckCode,
  restoreChangePassword,
  setStatus,
} = authFormSlice.actions

export default authFormSlice
