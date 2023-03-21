import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_AppLoader, initialState } from './data'

import { E_Locale } from 'models/shared/app'
import { LocalStorage } from 'utils/helpers/localStorage'

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchLanguage: (state, action: PayloadAction<E_Locale>) => {
      LocalStorage.setLanguage(action.payload)
      state.language = action.payload
    },
    setLoading: (state, action: PayloadAction<{ loader: E_AppLoader; status: boolean }>) => {
      state.loaders[action.payload.loader] = action.payload.status
    },
  },
})

export const appActions = appSlice.actions
