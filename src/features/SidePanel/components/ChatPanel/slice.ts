import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_LobbyMessage } from 'models/app'
import { E_Subscribe, I_SubscriptionData, E_Emit, I_EmitPayload } from 'models/socket/lobbyChat'
import { E_Emit as E_LREmit, I_EmitPayload as E_LREmitPayload } from 'models/socket/lobbyRooms'
import { socket } from 'services/socket'

interface I_InitialState {
  lobbyMessages: I_LobbyMessage[]
}

const initialState: I_InitialState = {
  lobbyMessages: [],
}

export const chatPanelSlice = createSlice({
  name: 'chatPanel',
  initialState: initialState,
  reducers: {
    setLobbyMessages: (
      state,
      action: PayloadAction<I_SubscriptionData[E_Subscribe.getLobbyMessages]>,
    ) => {
      state.lobbyMessages = action.payload.messages
    },
    setLobbyMessage: (
      state,
      action: PayloadAction<I_SubscriptionData[E_Subscribe.getLobbyMessage]>,
    ) => {
      state.lobbyMessages.unshift(action.payload.message)
    },
    emitRequestLobbyChat: () => {
      socket.emit(E_Emit.requestLobbyMessages)
    },
    emitSendLobbyMessage: (_, action: PayloadAction<I_EmitPayload[E_Emit.sendLobbyMessage]>) => {
      socket.emit(E_Emit.sendLobbyMessage, action.payload)
    },
    emitSendRoomMessage: (_, action: PayloadAction<E_LREmitPayload[E_LREmit.sendMessageRoom]>) => {
      socket.emit(E_LREmit.sendMessageRoom, action.payload)
    },
  },
})

export const {
  setLobbyMessages,
  setLobbyMessage,
  emitRequestLobbyChat,
  emitSendLobbyMessage,
  emitSendRoomMessage,
} = chatPanelSlice.actions
