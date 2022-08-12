import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_Modals, I_Modal } from './models'

interface I_InitialState {
  modals: I_Modal[]
}

const initialState: I_InitialState = {
  modals: [],
}

export const modalsSlice = createSlice({
  name: 'modalsManager',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<E_Modals>) => {
      state.modals.push({ window: action.payload })
    },
    closeModal: (state) => {
      state.modals.pop()
    },
  },
})

export const { openModal, closeModal } = modalsSlice.actions
