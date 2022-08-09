import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { I_Profile } from 'models/app'

const initialState: I_Profile = {
  id: 0,
  email: '',
  nickname: '',
  statuses: {
    inRoom: false,
    isAuth: false,
  },
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (_, action: PayloadAction<I_Profile>) => action.payload,
    logout: () => initialState,
  },
})

export const { setProfile, logout } = profileSlice.actions

export default profileSlice
