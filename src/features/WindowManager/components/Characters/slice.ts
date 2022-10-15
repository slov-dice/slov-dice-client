import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { characters, initialStateSlice } from './data'

import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { I_Character, T_EffectId } from 'models/game/character'

interface I_InitialState {
  characters: I_Character[]
  overlays: I_WindowOverlay[]
  characterCreator: {
    avatar: string
  }
}

const initialState: I_InitialState = {
  characters: characters,
  overlays: initialStateSlice,
  characterCreator: { avatar: '' },
}

export const gameCharactersSlice = createSlice({
  name: 'gameCharacters',
  initialState,
  reducers: {
    setCharacterBar: (
      state,
      action: PayloadAction<{ characterId: string; barName: string; barValue: number }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      const bar = character?.bars.find((item) => item.name === action.payload.barName)
      if (bar) {
        bar.current = action.payload.barValue
      }
    },

    setCharacterSpecial: (
      state,
      action: PayloadAction<{ characterId: string; specialName: string; specialValue: number }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      const special = character?.specials.find((item) => item.name === action.payload.specialName)
      if (special) {
        special.current = action.payload.specialValue
      }
    },

    setCharacterLevel: (
      state,
      action: PayloadAction<{ characterId: string; levelValue: number }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.level = action.payload.levelValue
      }
    },

    addCharacterEffect: (
      state,
      action: PayloadAction<{ characterId: string; effectId: T_EffectId }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.effects.push(action.payload.effectId)
      }
    },

    removeCharacterEffect: (
      state,
      action: PayloadAction<{ characterId: string; effectId: T_EffectId }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.effects = character.effects.filter((effect) => effect !== action.payload.effectId)
      }
    },

    setCharacterAvatar: (state, action: PayloadAction<{ characterId: string; avatar: string }>) => {
      // Если создаётся персонаж
      if (action.payload.characterId === 'characterCreator') {
        state.characterCreator.avatar = action.payload.avatar
        return
      }
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.avatar = action.payload.avatar
      }
    },

    setCharacterName: (
      state,
      action: PayloadAction<{ characterId: string; nameValue: string }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.name = action.payload.nameValue
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
