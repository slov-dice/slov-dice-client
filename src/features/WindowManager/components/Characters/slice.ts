import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  characterBars,
  characterEffects,
  characters,
  characterSpecials,
  initialStateSlice,
} from './data'

import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import {
  I_Character,
  I_CharactersSettings,
  T_CharacterBar,
  T_CharacterEffect,
  T_CharacterSpecial,
  T_CharacterEffectId,
} from 'models/shared/game/character'
import { getRandomThousand } from 'utils/helpers/generators'

interface I_InitialState {
  overlays: I_WindowOverlay[]
  characterCreator: {
    avatar: string
    bars: T_CharacterBar[]
    specials: T_CharacterSpecial[]
    effects: T_CharacterEffectId[]
  }
  characterEditor: {
    avatar: string
    effects: T_CharacterEffectId[]
  }
  settings: I_CharactersSettings
}

const initialState: I_InitialState = {
  overlays: initialStateSlice,
  characterCreator: { avatar: '', effects: [], bars: [], specials: [] },
  characterEditor: { avatar: '', effects: [] },
  settings: {
    bars: characterBars,
    specials: characterSpecials,
    effects: characterEffects,
  },
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

    setCharacterCreatorBar: (
      state,
      action: PayloadAction<{ name: string; value: number; property: 'current' | 'max' }>,
    ) => {
      const bar = state.characterCreator.bars.find((item) => item.name === action.payload.name)
      if (bar) {
        bar[action.payload.property] = action.payload.value
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

    setCharacterCreatorSpecial: (state, action: PayloadAction<{ name: string; value: number }>) => {
      const special = state.characterCreator.specials.find(
        (item) => item.name === action.payload.name,
      )
      if (special) {
        special.current = action.payload.value
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
      // Если создаётся персонаж
      if (action.payload.characterId === 'characterCreator') {
        state.characterCreator.effects.push(action.payload.effectId)
        return
      }
      if (action.payload.characterId === 'characterEditor') {
        state.characterEditor.effects.push(action.payload.effectId)
        return
      }
      const character = state.characters.find((item) => item.id === action.payload.characterId)
      if (character) {
        character.effects.push(action.payload.effectId)
      }
    },

    removeCharacterEffect: (
      state,
      action: PayloadAction<{ characterId: string; effectId: T_EffectId }>,
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

      // Если персонаж редактируется
      if (action.payload.characterId === 'characterEditor') {
        state.characterEditor.avatar = action.payload.avatar
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

    setCharacterCreator: (state) => {
      state.characterCreator = {
        avatar: '',
        bars: state.settings.bars,
        specials: state.settings.specials,
        effects: [],
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

    createCharacter: (state, action: PayloadAction<Omit<I_Character, 'id'>>) => {
      const user = { ...action.payload, id: getRandomThousand() }
      state.characterCreator = { avatar: '', effects: [], bars: [], specials: [] }
      state.characters.push(user)
    },

    updateCharacter: (state, action: PayloadAction<I_Character>) => {
      state.characters = state.characters.map((character) =>
        character.id === action.payload.id ? action.payload : character,
      )
    },

    setCharacterWindowSettingsBars: (state, action: PayloadAction<T_CharacterBar[]>) => {
      state.settings.bars = action.payload
      state.characters = state.characters.map((character) => {
        character.bars = action.payload
        return character
      })
    },

    setCharacterWindowSettingsSpecials: (state, action: PayloadAction<T_CharacterSpecial[]>) => {
      state.settings.specials = action.payload
      state.characters = state.characters.map((character) => {
        character.specials = action.payload
        return character
      })
    },

    setCharacterWindowSettingsEffects: (state, action: PayloadAction<T_CharacterEffect[]>) => {
      state.settings.effects = action.payload
      state.characters = state.characters.map((character) => {
        character.effects = []
        return character
      })
    },
  },
})

export const gameCharactersActions = gameCharactersSlice.actions
