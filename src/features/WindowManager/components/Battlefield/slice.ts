import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialOverlayStateSlice } from './data'

import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { T_CharacterAction } from 'models/shared/game/character'

interface I_InitialState {
  overlays: I_WindowOverlay[]
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
  overlays: initialOverlayStateSlice,
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

    setDummyEditor: (
      state,
      action: PayloadAction<{ actions: T_CharacterAction[]; avatar: string }>,
    ) => {
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

    openBattlefieldWindowOverlay: (state, action: PayloadAction<I_WindowOverlay>) => {
      state.overlays = state.overlays.map((overlay) =>
        overlay.name === action.payload.name ? action.payload : overlay,
      )
    },

    closeBattlefieldWindowOverlay: (state, action: PayloadAction<E_WindowOverlay>) => {
      state.overlays = state.overlays.map((overlay) =>
        overlay.name === action.payload ? { ...overlay, isOpen: false } : overlay,
      )
    },

    closeLastBattlefieldWindowOverlay: (state) => {
      state.overlays = state.overlays.map((overlay) => ({ ...overlay, isOpen: false }))
    },
  },
})

export const gameBattlefieldActions = gameBattlefieldSlice.actions
