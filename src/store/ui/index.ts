import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './data'

import { E_Locale } from 'models/app'
import { E_Modals, E_Panels, I_TaskItem } from 'models/ui'
import { E_Icon } from 'utils/helpers/icons'
import { LocalStorage } from 'utils/helpers/localStorage'

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openAuthLayout: (state) => {
      state.isAuthLayoutOpen = true
    },
    closeAuthLayout: (state) => {
      state.isAuthLayoutOpen = false
    },
    switchLanguage: (state, action: PayloadAction<E_Locale>) => {
      LocalStorage.setLanguage(action.payload)
      state.language = action.payload
    },
    openModal: (state, action: PayloadAction<E_Modals>) => {
      state.modals.push({ window: action.payload })
    },
    closeModal: (state, action: PayloadAction<E_Modals | null>) => {
      // Если модальное окно закрывается по клику оверлея или по нажатию ESC
      if (action.payload === null) {
        state.modals.pop()
        return
      }
      state.modals = state.modals.filter((modal) => modal.window !== action.payload)
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
  openModal,
  closeModal,
  openSidePanel,
  closeSidePanel,
  toggleSideMenu,
  updateToolbar,
  changeToolbarItemIcon,
  openAuthLayout,
  closeAuthLayout,
} = uiSlice.actions

export default uiSlice
