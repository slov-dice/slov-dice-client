import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialActiveCardActionSlice } from './data'

import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { T_CharacterAction } from 'models/shared/game/character'
import { T_BaseDummy } from 'models/shared/game/dummy'

interface I_InitialState {
  overlays: I_WindowOverlay[]
  activeCard: {
    id: string
    action: T_CharacterAction
  }
  action: {
    from: {
      id: string
    }
    to: {
      id: string
    }
  }

  dummyEditor: {
    avatar: string
    actions: T_CharacterAction[]
  }
  dummyCreator: {
    avatar: string
    actions: T_CharacterAction[]
  }
}

const initialState: I_InitialState = {
  overlays: [],
  activeCard: {
    id: '',
    action: initialActiveCardActionSlice,
  },
  action: {
    from: {
      id: '',
    },
    to: {
      id: '',
    },
  },
  dummyEditor: {
    avatar: '',
    actions: [],
  },
  dummyCreator: {
    avatar: '',
    actions: [],
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
        action: T_CharacterAction
      }>,
    ) => {
      state.activeCard = action.payload
    },
    disableActiveCard: (state) => {
      state.activeCard = { id: '', action: initialActiveCardActionSlice }
    },

    setAction: (state, action: PayloadAction<{ from: { id: string }; to: { id: string } }>) => {
      state.action = action.payload
    },
    disableAction: (state) => {
      state.action = { from: { id: '' }, to: { id: '' } }
    },

    setDummyCreator: (state) => {
      state.dummyCreator = { actions: [], avatar: '' }
    },

    setDummyEditor: (state, action: PayloadAction<T_BaseDummy>) => {
      state.dummyEditor = {
        avatar: action.payload.avatar,
        actions: action.payload.actions,
      }
    },

    setDummyAvatar: (state, action: PayloadAction<{ characterId: string; avatar: string }>) => {
      // Если создаётся болванка
      if (action.payload.characterId === 'dummyCreator') {
        state.dummyCreator.avatar = action.payload.avatar
        return
      }

      // Если болванка редактируется
      if (action.payload.characterId === 'dummyEditor') {
        state.dummyEditor.avatar = action.payload.avatar
        return
      }
    },

    setDummyActions: (
      state,
      action: PayloadAction<{ characterId: string; actions: T_CharacterAction[] }>,
    ) => {
      if (action.payload.characterId === 'dummyCreator') {
        state.dummyCreator.actions = action.payload.actions
      }
      if (action.payload.characterId === 'dummyEditor') {
        state.dummyEditor.actions = action.payload.actions
      }
    },

    openWindowOverlay: (state, action: PayloadAction<I_WindowOverlay>) => {
      if (!state.overlays.some((overlay) => overlay.name === action.payload.name)) {
        state.overlays.push(action.payload)
      }
    },

    closeWindowOverlay: (state, action: PayloadAction<E_WindowOverlay>) => {
      state.overlays = state.overlays.filter((overlay) => overlay.name !== action.payload)
    },

    closeLastWindowOverlay: (state) => {
      state.overlays.pop()
    },
  },
})

export const gameBattlefieldActions = gameBattlefieldSlice.actions
