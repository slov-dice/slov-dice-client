import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialStateSlice } from './data'

import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import {
  I_Character,
  T_CharacterBar,
  T_CharacterSpecial,
  T_CharacterEffectId,
  T_BaseCharacterBar,
  T_BaseCharacterSpecial,
  T_CharacterBarId,
  T_CharacterAction,
} from 'models/shared/game/character'

interface I_InitialState {
  overlays: I_WindowOverlay[]
  characterCreator: {
    avatar: string
    bars: T_CharacterBar[]
    specials: T_CharacterSpecial[]
    effects: T_CharacterEffectId[]
    actions: T_CharacterAction[]
  }
  characterEditor: {
    avatar: string
    effects: T_CharacterEffectId[]
  }
}

const initialState: I_InitialState = {
  overlays: initialStateSlice,
  characterCreator: { avatar: '', effects: [], bars: [], specials: [], actions: [] },
  characterEditor: { avatar: '', effects: [] },
}

export const gameCharactersSlice = createSlice({
  name: 'gameCharacters',
  initialState,
  reducers: {
    setCharacterCreator: (
      state,
      action: PayloadAction<{
        settingsBars: T_BaseCharacterBar[]
        settingsSpecials: T_BaseCharacterSpecial[]
      }>,
    ) => {
      state.characterCreator = {
        avatar: '',
        bars: action.payload.settingsBars.map((bar) => ({ id: bar.id, current: 50, max: 100 })),
        specials: action.payload.settingsSpecials.map((special) => ({
          id: special.id,
          current: 5,
        })),
        effects: [],
        actions: [],
      }
    },

    setCharacterCreatorBar: (
      state,
      action: PayloadAction<{ id: T_CharacterBarId; value: number; property: 'current' | 'max' }>,
    ) => {
      const bar = state.characterCreator.bars.find((item) => item.id === action.payload.id)
      if (bar) {
        bar[action.payload.property] = action.payload.value
      }
    },

    setCharacterCreatorSpecial: (
      state,
      action: PayloadAction<{ id: T_CharacterBarId; value: number }>,
    ) => {
      const special = state.characterCreator.specials.find((item) => item.id === action.payload.id)
      if (special) {
        special.current = action.payload.value
      }
    },

    addCharacterEffect: (
      state,
      action: PayloadAction<{ characterId: string; effectId: T_CharacterEffectId }>,
    ) => {
      // Если создаётся персонаж
      if (action.payload.characterId === 'characterCreator') {
        state.characterCreator.effects.push(action.payload.effectId)
        return
      }
      if (action.payload.characterId === 'characterEditor') {
        state.characterEditor.effects.push(action.payload.effectId)
        return
      }
    },

    removeCharacterEffect: (
      state,
      action: PayloadAction<{ characterId: string; effectId: T_CharacterEffectId }>,
    ) => {
      // Если создаётся персонаж
      if (action.payload.characterId === 'characterCreator') {
        state.characterCreator.effects = state.characterCreator.effects.filter(
          (effect) => effect !== action.payload.effectId,
        )
        return
      }
      // Если персонаж редактируется
      if (action.payload.characterId === 'characterEditor') {
        state.characterEditor.effects = state.characterEditor.effects.filter(
          (effect) => effect !== action.payload.effectId,
        )
        return
      }
    },

    setCharacterAvatar: (state, action: PayloadAction<{ characterId: string; avatar: string }>) => {
      // Если создаётся персонаж
      if (action.payload.characterId === 'characterCreator') {
        state.characterCreator.avatar = action.payload.avatar
        return
      }

      // Если персонаж редактируется
      if (action.payload.characterId === 'characterEditor') {
        state.characterEditor.avatar = action.payload.avatar
        return
      }
    },

    setCharacterEditor: (state, action: PayloadAction<I_Character>) => {
      state.characterEditor = {
        avatar: action.payload.avatar,
        effects: action.payload.effects,
      }
    },

    openCharacterWindowOverlay: (state, action: PayloadAction<I_WindowOverlay>) => {
      state.overlays = state.overlays.map((overlay) =>
        overlay.name === action.payload.name ? action.payload : overlay,
      )
    },

    closeCharacterWindowOverlay: (state, action: PayloadAction<E_WindowOverlay>) => {
      state.overlays = state.overlays.map((overlay) =>
        overlay.name === action.payload ? { ...overlay, isOpen: false } : overlay,
      )
    },

    closeLastCharacterWindowOverlay: (state) => {
      state.overlays = state.overlays.map((overlay) => ({ ...overlay, isOpen: false }))
    },
  },
})

export const gameCharactersActions = gameCharactersSlice.actions
