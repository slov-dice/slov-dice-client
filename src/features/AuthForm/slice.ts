import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_AuthContent } from './models'

interface I_InitialState {
  isOpen: boolean
  content: E_AuthContent
}

const initialState: I_InitialState = {
  isOpen: false,
  content: E_AuthContent.registrationEntry,
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
  },
})

export const { switchAuthFormContent, openAuthForm, closeAuthForm } = authFormSlice.actions

export default authFormSlice
