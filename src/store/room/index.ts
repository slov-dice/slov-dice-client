import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_RoomType, I_FullRoom } from 'models/shared/app'
import {
  T_BaseCharacterBar,
  T_BaseCharacterSpecial,
  T_BaseCharacterEffect,
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
      state.messages.unshift(action.payload.message)
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
    setCharactersWindowSettingsBars: (state, action: PayloadAction<T_BaseCharacterBar[]>) => {
      state.game.characters.settings.bars = action.payload
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
      action: PayloadAction<T_BaseCharacterSpecial[]>,
    ) => {
      state.game.characters.settings.specials = action.payload
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
    setCharactersWindowSettingsEffects: (state, action: PayloadAction<T_BaseCharacterEffect[]>) => {
      state.game.characters.settings.effects = action.payload
    },
  },
})

export const roomActions = roomSlice.actions
