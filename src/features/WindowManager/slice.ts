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
      if (state.windows.some((window) => window.content === action.payload)) return
      state.windows.push({ content: action.payload })
    },
    closeWindow: (state, action: PayloadAction<E_Window>) => {
      state.windows = state.windows.filter((window) => window.content !== action.payload)
    },
  },
})

export const { openWindow, closeWindow } = windowManagerSlice.actions
