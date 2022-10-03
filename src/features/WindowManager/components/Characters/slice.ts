import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { characters } from './data'

import { I_Character } from 'models/game/character'

interface I_InitialState {
  characters: I_Character[]
}

const initialState: I_InitialState = {
  characters: characters,
}

export const gameCharactersSlice = createSlice({
  name: 'gameCharacters',
  initialState,
  reducers: {
    setBarValue: (
      state,
      action: PayloadAction<{ characterId: string; barName: string; barValue: number }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      const bar = character?.bars.find((item) => item.name === action.payload.barName)
      if (bar) {
        bar.current = action.payload.barValue
      }
    },
    setSpecialValue: (
      state,
      action: PayloadAction<{ characterId: string; specialName: string; specialValue: number }>,
    ) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      const special = character?.specials.find((item) => item.name === action.payload.specialName)
      if (special) {
        special.current = action.payload.specialValue
      }
    },
    setLevelValue: (state, action: PayloadAction<{ characterId: string; levelValue: number }>) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.level = action.payload.levelValue
      }
    },
    removeEffect: (state, action: PayloadAction<{ characterId: string; effectName: string }>) => {
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.effects = character.effects.filter(
          (effect) => effect.name !== action.payload.effectName,
        )
      }
    },
  },
})

export const { setBarValue, setSpecialValue, setLevelValue, removeEffect } =
  gameCharactersSlice.actions
