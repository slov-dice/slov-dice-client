import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_RoomType, I_FullRoom, I_RoomMessage } from 'models/shared/app'
import {
  T_BaseCharacterBar,
  T_BaseCharacterSpecial,
  T_BaseCharacterEffect,
  I_Character,
  T_CharacterId,
} from 'models/shared/game/character'
import {
  E_Emit,
  I_EmitPayload,
  E_Subscribe,
  I_SubscriptionData,
} from 'models/shared/socket/lobbyRooms'
import { socket } from 'services/socket'

const initialState: I_FullRoom = {
  id: '',
  name: '',
  password: '',
  authorId: 0,
  currentSize: 0,
  size: 0,
  type: E_RoomType.public,
  users: [],
  messages: [],
  game: {
    characters: {
      window: {
        characters: [],
      },
      settings: {
        bars: [],
        effects: [],
        specials: [],
      },
    },
  },
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom: (_, action: PayloadAction<I_FullRoom>) => action.payload,
    setRoomMessage: (
      state,
      action: PayloadAction<I_SubscriptionData[E_Subscribe.getRoomMessage]>,
    ) => {
      state.messages.push(action.payload.message)
    },
    emitCreateRoom: (_, action: PayloadAction<I_EmitPayload[E_Emit.createRoom]>) => {
      socket.emit(E_Emit.createRoom, action.payload)
    },
    emitJoinRoom: (_, action: PayloadAction<I_EmitPayload[E_Emit.joinRoom]>) => {
      socket.emit(E_Emit.joinRoom, action.payload)
    },
    emitLeaveRoom: (state) => {
      socket.emit(E_Emit.leaveRoom, { roomId: state.id })
      return initialState
    },
    emitRequestRoomChat: (state) => {
      if (state.id) {
        const payload: I_EmitPayload[E_Emit.requestRoomMessages] = {
          roomId: state.id,
        }
        socket.emit(E_Emit.requestRoomMessages, payload)
      }
    },
    setRoomChat: (state, action: PayloadAction<{ messages: I_RoomMessage[] }>) => {
      state.messages = action.payload.messages
    },

    // Characters Window
    emitUpdateCharactersWindowSettingsBars: (
      state,
      action: PayloadAction<T_BaseCharacterBar[]>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateCharactersWindowSettingsBars] = {
        roomId: state.id,
        bars: action.payload,
      }
      socket.emit(E_Emit.updateCharactersWindowSettingsBars, payload)
    },
    setCharactersWindowSettingsBars: (
      state,
      action: PayloadAction<{ settingsBars: T_BaseCharacterBar[]; characters: I_Character[] }>,
    ) => {
      state.game.characters.settings.bars = action.payload.settingsBars
      state.game.characters.window.characters = action.payload.characters
    },

    emitUpdateCharactersWindowSettingsSpecials: (
      state,
      action: PayloadAction<T_BaseCharacterSpecial[]>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateCharactersWindowSettingsSpecials] = {
        roomId: state.id,
        specials: action.payload,
      }
      socket.emit(E_Emit.updateCharactersWindowSettingsSpecials, payload)
    },
    setCharactersWindowSettingsSpecials: (
      state,
      action: PayloadAction<{
        settingsSpecials: T_BaseCharacterSpecial[]
        characters: I_Character[]
      }>,
    ) => {
      state.game.characters.settings.specials = action.payload.settingsSpecials
      state.game.characters.window.characters = action.payload.characters
    },

    emitUpdateCharactersWindowSettingsEffects: (
      state,
      action: PayloadAction<T_BaseCharacterEffect[]>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateCharactersWindowSettingsEffects] = {
        roomId: state.id,
        effects: action.payload,
      }
      socket.emit(E_Emit.updateCharactersWindowSettingsEffects, payload)
    },
    setCharactersWindowSettingsEffects: (
      state,
      action: PayloadAction<{
        settingsEffects: T_BaseCharacterEffect[]
        characters: I_Character[]
      }>,
    ) => {
      state.game.characters.settings.effects = action.payload.settingsEffects
      state.game.characters.window.characters = action.payload.characters
    },

    emitCreateCharacterInCharactersWindow: (state, action: PayloadAction<I_Character>) => {
      const payload: I_EmitPayload[E_Emit.createCharacterInCharactersWindow] = {
        roomId: state.id,
        character: action.payload,
      }
      socket.emit(E_Emit.createCharacterInCharactersWindow, payload)
    },
    setCreatedCharacterInCharactersWindow: (state, action: PayloadAction<I_Character>) => {
      state.game.characters.window.characters.push(action.payload)
    },

    emitUpdateCharacterInCharactersWindow: (state, action: PayloadAction<I_Character>) => {
      const payload: I_EmitPayload[E_Emit.updateCharacterInCharactersWindow] = {
        roomId: state.id,
        character: action.payload,
      }
      socket.emit(E_Emit.updateCharacterInCharactersWindow, payload)
    },
    emitUpdateCharacterFieldInCharactersWindow: (
      state,
      action: PayloadAction<{
        characterId: T_CharacterId
        field: string
        value: string | number
        subFieldId?: string
      }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateCharacterFieldInCharactersWindow] = {
        roomId: state.id,
        characterId: action.payload.characterId,
        field: action.payload.field,
        value: action.payload.value,
        subFieldId: action.payload.subFieldId,
      }

      socket.emit(E_Emit.updateCharacterFieldInCharactersWindow, payload)
    },
    setUpdatedCharacterInCharactersWindow: (state, action: PayloadAction<I_Character>) => {
      state.game.characters.window.characters = state.game.characters.window.characters.map(
        (character) => (character.id === action.payload.id ? action.payload : character),
      )
    },

    emitRemoveCharacterInCharactersWindow: (
      state,
      action: PayloadAction<{ characterId: T_CharacterId }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.removeCharacterInCharactersWindow] = {
        roomId: state.id,
        characterId: action.payload.characterId,
      }

      socket.emit(E_Emit.removeCharacterInCharactersWindow, payload)
    },
    setRemovedCharacterInCharactersWindow: (
      state,
      action: PayloadAction<{ characterId: T_CharacterId }>,
    ) => {
      state.game.characters.window.characters = state.game.characters.window.characters.filter(
        (character) => character.id !== action.payload.characterId,
      )
    },
  },
})

export const roomActions = roomSlice.actions
