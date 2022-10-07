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
      // Фокусим окно, если его пытаются открыть повторно
      if (state.windows.some((window) => window.content === action.payload)) {
        const focusedWindow = state.windows.find((window) => window.content === action.payload)
        const focusedWindowIndex = state.windows.findIndex(
          (window) => window.content === action.payload,
        )
        state.windows.splice(focusedWindowIndex, 1)
        if (focusedWindow) state.windows.push({ ...focusedWindow })
        state.windows = state.windows.map((window) => ({
          ...window,
          focused: action.payload === window.content,
        }))
        return
      }
      state.windows = state.windows.map((window) => ({
        ...window,
        focused: action.payload === window.content,
      }))
      state.windows.push({ content: action.payload, focused: true })
    },
    setWindowFocus: (state, action: PayloadAction<E_Window>) => {
      const focusedWindow = state.windows.find((window) => window.content === action.payload)
      const focusedWindowIndex = state.windows.findIndex(
        (window) => window.content === action.payload,
      )
      state.windows.splice(focusedWindowIndex, 1)
      if (focusedWindow) state.windows.push({ ...focusedWindow })
      state.windows = state.windows.map((window) => ({
        ...window,
        focused: action.payload === window.content,
      }))
    },
    closeWindow: (state, action: PayloadAction<E_Window>) => {
      state.windows = state.windows.filter((window) => window.content !== action.payload)

      if (state.windows.length > 1) {
        state.windows[state.windows.length - 1].focused = true
      }
    },
  },
})

export const windowManagerActions = windowManagerSlice.actions
