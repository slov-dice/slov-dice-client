import { createSlice } from '@reduxjs/toolkit'

interface I_InitialState {
  isOpen: boolean
}

const initialState: I_InitialState = {
  isOpen: false,
}

export const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState: initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.isOpen = !state.isOpen
    },
    closeSideMenu: (state) => {
      state.isOpen = false
    },
  },
})

export const sideMenuActions = sideMenuSlice.actions
