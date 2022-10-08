import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { characters } from './data'

import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { I_Character } from 'models/game/character'

interface I_InitialState {
  characters: I_Character[]
  overlays: E_WindowOverlay[]
}

const initialState: I_InitialState = {
  characters: characters,
  overlays: [],
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
    removeCharacterEffect: (
      state,
      action: PayloadAction<{ characterId: string; effectName: string }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.effects = character.effects.filter(
          (effect) => effect.name !== action.payload.effectName,
        )
      }
    },
    openCharacterWindowOverlay: (state, action: PayloadAction<E_WindowOverlay>) => {
      state.overlays.push(action.payload)
    },
    closeCharacterWindowOverlay: (state, action: PayloadAction<E_WindowOverlay>) => {
      state.overlays = state.overlays.filter((overlay) => overlay !== action.payload)
    },
    closeLastCharacterWindowOverlay: (state) => {
      state.overlays.pop()
    },
  },
})

export const gameCharactersActions = gameCharactersSlice.actions
