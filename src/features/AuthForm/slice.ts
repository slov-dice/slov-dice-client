import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_AuthContent } from './models'

interface I_InitialState {
  content: E_AuthContent
}

const initialState: I_InitialState = {
  content: E_AuthContent.registrationEntry,
}

export const counterSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    switchAuthFormContent: (state, action: PayloadAction<E_AuthContent>) => {
      state.content = action.payload
    },
  },
})

export const { switchAuthFormContent } = counterSlice.actions

export default counterSlice
