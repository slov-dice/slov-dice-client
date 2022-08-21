import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState } from './data'

import { I_TaskItem } from 'features/Header/models'
import { E_Icon } from 'utils/helpers/icons'

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
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

export const { updateToolbar, changeToolbarItemIcon } = headerSlice.actions
