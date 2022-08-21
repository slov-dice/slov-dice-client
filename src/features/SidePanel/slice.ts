import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_Panels } from './models'

interface I_InitialState {
  panel: E_Panels | null
}

const initialState: I_InitialState = {
  panel: null,
}

export const sidePanelSlice = createSlice({
  name: 'sidePanel',
  initialState: initialState,
  reducers: {
    openSidePanel: (state, action: PayloadAction<E_Panels>) => {
      state.panel = action.payload
    },
    closeSidePanel: (state) => {
      state.panel = null
    },
  },
})

export const { openSidePanel, closeSidePanel } = sidePanelSlice.actions
