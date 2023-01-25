import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialOverlayStateSlice } from './data'

import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { T_DocId } from 'models/shared/game/textEditor'

interface I_InitialState {
  overlays: I_WindowOverlay[]
  opened: T_DocId[]
}

const initialState: I_InitialState = {
  overlays: initialOverlayStateSlice,
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
      state.overlays = state.overlays.map((overlay) =>
        overlay.name === action.payload.name ? action.payload : overlay,
      )
    },

    closeWindowOverlay: (state, action: PayloadAction<E_WindowOverlay>) => {
      state.overlays = state.overlays.map((overlay) =>
        overlay.name === action.payload ? { ...overlay, isOpen: false } : overlay,
      )
    },

    closeLastWindowOverlay: (state) => {
      state.overlays = state.overlays.map((overlay) => ({ ...overlay, isOpen: false }))
    },
  },
})

export const gameTextEditorActions = gameTextEditorSlice.actions
