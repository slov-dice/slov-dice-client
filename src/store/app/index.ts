import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_Locale } from 'models/app'
import { E_Theme } from 'models/styled'
import { LocalStorage } from 'utils/helpers/localStorage'

interface I_InitialState {
  language: E_Locale
  theme: E_Theme
}

export const initialState: I_InitialState = {
  language: LocalStorage.getLanguage() || E_Locale.ru,
  theme: E_Theme.classic,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<E_Locale>) => {
      LocalStorage.setLanguage(action.payload)
      state.language = action.payload
    },
  },
})

export const { switchLanguage } = appSlice.actions
