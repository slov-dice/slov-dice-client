import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './data'

import { E_Locale } from 'models/app'
import { E_Panels, I_TaskItem } from 'models/ui'
import { E_Icon } from 'utils/helpers/icons'
import { LocalStorage } from 'utils/helpers/localStorage'

export const uiSlice = createSlice({
  name: 'ui',
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
    toggleSideMenu: (state) => {
      state.sideMenu = !state.sideMenu
    },
    updateToolbar: (state, action: PayloadAction<I_TaskItem[]>) => {
      state.toolbar = action.payload
    },
    changeToolbarItemIcon: (state, action: PayloadAction<{ name: string; icon: E_Icon }>) => {
      state.toolbar = state.toolbar.map((item) => {
        if (item.name === action.payload.name) {
          item.icon = action.payload.icon
        }
        return item
      })
    },
  },
})

export const {
  switchLanguage,
  openSidePanel,
  closeSidePanel,
  toggleSideMenu,
  updateToolbar,
  changeToolbarItemIcon,
} = uiSlice.actions
