import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { T_DocId } from 'models/shared/game/textEditor'

interface I_InitialState {
  overlays: I_WindowOverlay[]
  opened: T_DocId[]
}

const initialState: I_InitialState = {
  overlays: [],
  opened: [],
}

export const gameTextEditorSlice = createSlice({
  name: 'gameTextEditor',
  initialState,
  reducers: {
    openDoc: (state, action: PayloadAction<T_DocId>) => {
      if (state.opened.find((docId) => docId === action.payload)) {
        state.opened = [action.payload, ...state.opened.filter((docId) => docId !== action.payload)]
      } else {
        state.opened.unshift(action.payload)
      }
    },

    closeDoc: (state, action: PayloadAction<T_DocId>) => {
      state.opened = state.opened.filter((docId) => docId !== action.payload)
    },

    openWindowOverlay: (state, action: PayloadAction<I_WindowOverlay>) => {
      if (!state.overlays.some((overlay) => overlay.name === action.payload.name)) {
        state.overlays.push(action.payload)
      }
    },

    closeWindowOverlay: (state, action: PayloadAction<E_WindowOverlay>) => {
      state.overlays = state.overlays.filter((overlay) => overlay.name !== action.payload)
    },

    closeLastWindowOverlay: (state) => {
      state.overlays.pop()
    },
  },
})

export const gameTextEditorActions = gameTextEditorSlice.actions
