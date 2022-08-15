import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_Panels } from 'features/Header/models'
import { E_Locale } from 'models/app'
import { LocalStorage } from 'utils/helpers/localStorage'

interface I_InitialState {
  language: E_Locale
  sidePanel: E_Panels | null
}

export const initialState: I_InitialState = {
  language: LocalStorage.getLanguage() || E_Locale.ru,
  sidePanel: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<E_Locale>) => {
      LocalStorage.setLanguage(action.payload)
      state.language = action.payload
    },
    openSidePanel: (state, action: PayloadAction<E_Panels>) => {
      state.sidePanel = action.payload
    },
    closeSidePanel: (state) => {
      state.sidePanel = null
    },
  },
})

export const { switchLanguage, openSidePanel, closeSidePanel } = appSlice.actions
