import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { E_RoomType, I_FullRoom, I_RoomMessage } from 'models/shared/app'
import { E_Battlefield } from 'models/shared/game/battlefield'
import {
  T_BaseCharacterBar,
  T_BaseCharacterSpecial,
  T_BaseCharacterEffect,
  I_Character,
  T_CharacterId,
  T_CharacterAction,
} from 'models/shared/game/character'
import { T_BaseDummy, T_Dummy, T_DummyId } from 'models/shared/game/dummy'
import { I_Doc, T_DocId } from 'models/shared/game/textEditor'
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
    battlefield: {
      window: {
        masterDummies: [],
        masterField: [],
        playersDummies: [],
        playersField: [],
      },
    },
    textEditor: {
      window: {
        docs: [],
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
    emitUpdateSettingsBars: (state, action: PayloadAction<T_BaseCharacterBar[]>) => {
      const payload: I_EmitPayload[E_Emit.updateSettingsBars] = {
        roomId: state.id,
        bars: action.payload,
      }
      socket.emit(E_Emit.updateSettingsBars, payload)
    },
    setSettingsBars: (
      state,
      action: PayloadAction<{
        settingsBars: T_BaseCharacterBar[]
        characters: I_Character[]
        masterDummies: T_BaseDummy[]
        playersDummies: T_BaseDummy[]
      }>,
    ) => {
      state.game.characters.settings.bars = action.payload.settingsBars
      state.game.characters.window.characters = action.payload.characters
      state.game.battlefield.window.masterDummies = action.payload.masterDummies
      state.game.battlefield.window.playersDummies = action.payload.playersDummies
    },

    emitUpdateCharactersSettingsSpecials: (
      state,
      action: PayloadAction<T_BaseCharacterSpecial[]>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateCharactersSettingsSpecials] = {
        roomId: state.id,
        specials: action.payload,
      }
      socket.emit(E_Emit.updateCharactersSettingsSpecials, payload)
    },
    setCharactersSettingsSpecials: (
      state,
      action: PayloadAction<{
        settingsSpecials: T_BaseCharacterSpecial[]
        characters: I_Character[]
      }>,
    ) => {
      state.game.characters.settings.specials = action.payload.settingsSpecials
      state.game.characters.window.characters = action.payload.characters
    },

    emitUpdateCharactersSettingsEffects: (
      state,
      action: PayloadAction<T_BaseCharacterEffect[]>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateCharactersSettingsEffects] = {
        roomId: state.id,
        effects: action.payload,
      }
      socket.emit(E_Emit.updateCharactersSettingsEffects, payload)
    },
    setCharactersSettingsEffects: (
      state,
      action: PayloadAction<{
        settingsEffects: T_BaseCharacterEffect[]
        characters: I_Character[]
      }>,
    ) => {
      state.game.characters.settings.effects = action.payload.settingsEffects
      state.game.characters.window.characters = action.payload.characters
    },

    emitCreateCharacter: (state, action: PayloadAction<I_Character>) => {
      const payload: I_EmitPayload[E_Emit.createCharacter] = {
        roomId: state.id,
        character: action.payload,
      }
      socket.emit(E_Emit.createCharacter, payload)
    },
    setCreatedCharacter: (state, action: PayloadAction<I_Character>) => {
      state.game.characters.window.characters.push(action.payload)
    },

    emitUpdateCharacter: (state, action: PayloadAction<I_Character>) => {
      const payload: I_EmitPayload[E_Emit.updateCharacter] = {
        roomId: state.id,
        character: action.payload,
      }
      socket.emit(E_Emit.updateCharacter, payload)
    },
    emitUpdateCharacterField: (
      state,
      action: PayloadAction<{
        characterId: T_CharacterId
        field: string
        value: string | number
        subFieldId?: string
      }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateCharacterField] = {
        roomId: state.id,
        characterId: action.payload.characterId,
        field: action.payload.field,
        value: action.payload.value,
        subFieldId: action.payload.subFieldId,
      }

      socket.emit(E_Emit.updateCharacterField, payload)
    },
    setUpdatedCharacter: (state, action: PayloadAction<I_Character>) => {
      state.game.characters.window.characters = state.game.characters.window.characters.map(
        (character) => (character.id === action.payload.id ? action.payload : character),
      )
    },

    emitRemoveCharacter: (state, action: PayloadAction<{ characterId: T_CharacterId }>) => {
      const payload: I_EmitPayload[E_Emit.removeCharacter] = {
        roomId: state.id,
        characterId: action.payload.characterId,
      }

      socket.emit(E_Emit.removeCharacter, payload)
    },
    setRemovedCharacter: (state, action: PayloadAction<{ characterId: T_CharacterId }>) => {
      state.game.characters.window.characters = state.game.characters.window.characters.filter(
        (character) => character.id !== action.payload.characterId,
      )
    },

    // Battlefield Window
    emitCreateDummy: (
      state,
      action: PayloadAction<{ dummy: T_BaseDummy; battlefield: E_Battlefield }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.createDummy] = {
        roomId: state.id,
        dummy: action.payload.dummy,
        battlefield: action.payload.battlefield,
      }

      socket.emit(E_Emit.createDummy, payload)
    },
    setCreatedDummy: (
      state,
      action: PayloadAction<{ dummy: T_BaseDummy; battlefield: E_Battlefield }>,
    ) => {
      if (action.payload.battlefield === E_Battlefield.master) {
        state.game.battlefield.window.masterDummies.push(action.payload.dummy)
      }
      if (action.payload.battlefield === E_Battlefield.players) {
        state.game.battlefield.window.playersDummies.push(action.payload.dummy)
      }
    },

    emitAddDummy: (
      state,
      action: PayloadAction<{ dummy: T_BaseDummy; battlefield: E_Battlefield }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.addDummyToBattlefield] = {
        roomId: state.id,
        dummy: action.payload.dummy,
        battlefield: action.payload.battlefield,
      }

      socket.emit(E_Emit.addDummyToBattlefield, payload)
    },
    emitRemoveDummiesOnBattlefield: (
      state,
      action: PayloadAction<{ dummyId: T_DummyId; battlefield: E_Battlefield }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.removeDummiesOnBattlefield] = {
        roomId: state.id,
        dummyId: action.payload.dummyId,
        battlefield: action.payload.battlefield,
      }

      socket.emit(E_Emit.removeDummiesOnBattlefield, payload)
    },
    setDummiesOnBattlefield: (
      state,
      action: PayloadAction<{ dummies: T_Dummy[]; battlefield: E_Battlefield }>,
    ) => {
      if (action.payload.battlefield === E_Battlefield.master) {
        state.game.battlefield.window.masterField = action.payload.dummies
      }
      if (action.payload.battlefield === E_Battlefield.players) {
        state.game.battlefield.window.playersField = action.payload.dummies
      }
    },

    emitMakeActionInBattlefield: (
      state,
      action: PayloadAction<{
        action: T_CharacterAction
        actionTarget: T_DummyId | T_CharacterId
        actionInitiator: T_DummyId | T_CharacterId
      }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.makeActionInBattlefield] = {
        roomId: state.id,
        action: action.payload.action,
        actionInitiator: action.payload.actionInitiator,
        actionTarget: action.payload.actionTarget,
      }

      socket.emit(E_Emit.makeActionInBattlefield, payload)
    },

    setCharactersAndDummies: (
      state,
      action: PayloadAction<{
        characters: I_Character[]
        masterField: T_Dummy[]
        playersField: T_Dummy[]
      }>,
    ) => {
      state.game.characters.window.characters = action.payload.characters
      state.game.battlefield.window.masterField = action.payload.masterField
      state.game.battlefield.window.playersField = action.payload.playersField
    },
    emitUpdateDummy: (
      state,
      action: PayloadAction<{ battlefield: E_Battlefield; dummy: T_BaseDummy }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateDummy] = {
        roomId: state.id,
        dummy: action.payload.dummy,
        battlefield: action.payload.battlefield,
      }

      socket.emit(E_Emit.updateDummy, payload)
    },
    emitUpdateDummyField: (
      state,
      action: PayloadAction<{
        dummyId: T_DummyId
        battlefield: E_Battlefield
        field: string
        value: string | number
        subFieldId?: string
      }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateDummyField] = {
        roomId: state.id,
        dummyId: action.payload.dummyId,
        battlefield: action.payload.battlefield,
        field: action.payload.field,
        value: action.payload.value,
        subFieldId: action.payload.subFieldId,
      }

      socket.emit(E_Emit.updateDummyField, payload)
    },
    setUpdatedDummy: (
      state,
      action: PayloadAction<{ dummy: T_BaseDummy; battlefield: E_Battlefield }>,
    ) => {
      if (action.payload.battlefield === E_Battlefield.master) {
        state.game.battlefield.window.masterDummies =
          state.game.battlefield.window.masterDummies.map((dummy) =>
            dummy.id === action.payload.dummy.id ? action.payload.dummy : dummy,
          )
      }
      if (action.payload.battlefield === E_Battlefield.players) {
        state.game.battlefield.window.playersDummies =
          state.game.battlefield.window.playersDummies.map((dummy) =>
            dummy.id === action.payload.dummy.id ? action.payload.dummy : dummy,
          )
      }
    },

    emitRemoveDummy: (
      state,
      action: PayloadAction<{ dummyId: T_DummyId; battlefield: E_Battlefield }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.removeDummy] = {
        roomId: state.id,
        dummyId: action.payload.dummyId,
        battlefield: action.payload.battlefield,
      }

      socket.emit(E_Emit.removeDummy, payload)
    },
    setRemovedDummy: (
      state,
      action: PayloadAction<{ dummyId: T_DummyId; battlefield: E_Battlefield }>,
    ) => {
      state.game.battlefield.window[
        action.payload.battlefield === E_Battlefield.master ? 'masterDummies' : 'playersDummies'
      ] = state.game.battlefield.window[
        action.payload.battlefield === E_Battlefield.master ? 'masterDummies' : 'playersDummies'
      ].filter((dummy) => dummy.id !== action.payload.dummyId)

      state.game.battlefield.window[
        action.payload.battlefield === E_Battlefield.master ? 'masterField' : 'playersField'
      ] = state.game.battlefield.window[
        action.payload.battlefield === E_Battlefield.master ? 'masterField' : 'playersField'
      ].filter((dummy) => dummy.id !== action.payload.dummyId)
    },
    emitRemoveDummyOnBattlefield: (
      state,
      action: PayloadAction<{ dummySubId: string; battlefield: E_Battlefield }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.removeDummyOnBattlefield] = {
        roomId: state.id,
        dummySubId: action.payload.dummySubId,
        battlefield: action.payload.battlefield,
      }

      socket.emit(E_Emit.removeDummyOnBattlefield, payload)
    },
    updateDummyFieldOnBattlefield: (
      state,
      action: PayloadAction<{
        dummySubId: string
        battlefield: E_Battlefield
        field: string
        value: number
        subFieldId: string
      }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateDummyFieldOnBattlefield] = {
        roomId: state.id,
        field: action.payload.field,
        dummySubId: action.payload.dummySubId,
        battlefield: action.payload.battlefield,
        value: action.payload.value,
        subFieldId: action.payload.subFieldId,
      }

      socket.emit(E_Emit.updateDummyFieldOnBattlefield, payload)
    },

    emitCreateDoc: (state, action: PayloadAction<{ title: string; description: string }>) => {
      const payload: I_EmitPayload[E_Emit.createDoc] = {
        roomId: state.id,
        title: action.payload.title,
        description: action.payload.description,
      }

      socket.emit(E_Emit.createDoc, payload)
    },

    setCreatedDoc: (state, action: PayloadAction<{ doc: I_Doc }>) => {
      state.game.textEditor.window.docs.push(action.payload.doc)
    },

    emitUpdateDoc: (
      state,
      action: PayloadAction<{ field: string; docId: T_DocId; value: string }>,
    ) => {
      const payload: I_EmitPayload[E_Emit.updateDoc] = {
        roomId: state.id,
        docId: action.payload.docId,
        field: action.payload.field,
        value: action.payload.value,
      }

      socket.emit(E_Emit.updateDoc, payload)
    },
    setUpdatedDoc: (state, action: PayloadAction<{ doc: I_Doc }>) => {
      state.game.textEditor.window.docs = state.game.textEditor.window.docs.map((doc) =>
        doc.id === action.payload.doc.id ? action.payload.doc : doc,
      )
    },

    emitRemoveDoc: (state, action: PayloadAction<{ docId: T_DocId }>) => {
      const payload: I_EmitPayload[E_Emit.removeDoc] = {
        docId: action.payload.docId,
        roomId: state.id,
      }

      socket.emit(E_Emit.removeDoc, payload)
    },
    setRemovedDoc: (state, action: PayloadAction<{ docId: T_DocId }>) => {
      state.game.textEditor.window.docs = state.game.textEditor.window.docs.filter(
        (doc) => doc.id !== action.payload.docId,
      )
    },
  },
})

export const roomActions = roomSlice.actions
