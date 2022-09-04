import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_Window, E_Window } from './models'

interface I_InitialState {
  windows: I_Window[]
}

const initialState: I_InitialState = {
  windows: [],
}

export const windowManagerSlice = createSlice({
  name: 'windowManager',
  initialState,
  reducers: {
    openWindow: (state, action: PayloadAction<E_Window>) => {
      state.windows.push({ content: action.payload })
    },
    closeWindow: (state) => {
      state.windows.pop()
    },
  },
})

export const { openWindow, closeWindow } = windowManagerSlice.actions
