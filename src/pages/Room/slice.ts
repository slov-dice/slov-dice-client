import { createSlice } from '@reduxjs/toolkit'

interface I_InitialState {
  isOpen: boolean
}

const initialState: I_InitialState = {
  isOpen: false,
}

export const roomPageSlice = createSlice({
  name: 'roomPage',
  initialState,
  reducers: {
    openRoomPage: (state) => {
      state.isOpen = true
    },
    closeRoomPage: (state) => {
      state.isOpen = false
    },
  },
})

export const { openRoomPage, closeRoomPage } = roomPageSlice.actions
