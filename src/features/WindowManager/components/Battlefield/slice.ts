import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface I_InitialState {
  activeCard: {
    id: string
    action: string
  }
  action: {
    from: {
      id: string
    }
    to: {
      id: string
    }
  }
}

const initialState: I_InitialState = {
  activeCard: {
    id: '',
    action: '',
  },
  action: {
    from: {
      id: '',
    },
    to: {
      id: '',
    },
  },
}

export const gameBattlefieldSlice = createSlice({
  name: 'gameBattlefield',
  initialState,
  reducers: {
    setActiveCard: (
      state,
      action: PayloadAction<{
        id: string
        action: string
      }>,
    ) => {
      state.activeCard = action.payload
    },
    disableActiveCard: (state) => {
      state.activeCard = { id: '', action: '' }
    },

    setAction: (state, action: PayloadAction<{ from: { id: string }; to: { id: string } }>) => {
      state.action = action.payload
    },
    disableAction: (state) => {
      state.action = { from: { id: '' }, to: { id: '' } }
    },
  },
})

export const gameBattlefieldActions = gameBattlefieldSlice.actions
