import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_LobbyUser } from 'models/app'
import { E_Subscribe, I_SubscriptionData, E_Emit } from 'models/socket/lobbyUsers'
import { socket } from 'services/socket'

interface I_InitialState {
  lobbyUsers: I_LobbyUser[]
  roomUsers: I_LobbyUser[]
}

const initialState: I_InitialState = {
  lobbyUsers: [],
  roomUsers: [],
}

export const usersPanelSlice = createSlice({
  name: 'usersPanel',
  initialState: initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<I_SubscriptionData[E_Subscribe.getLobbyUsers]>) => {
      state.lobbyUsers = action.payload.users
    },
    updateUser: (state, action: PayloadAction<I_SubscriptionData[E_Subscribe.getLobbyUser]>) => {
      const index = state.lobbyUsers.findIndex((user) => user.id === action.payload.user.id)

      // Если nickname пустой (логоут гостя)
      if (!action.payload.user.nickname) {
        // Удаляем пользователя
        state.lobbyUsers.splice(index, 1)
        return
      }

      // Если пользователь не найден
      if (index < 0) {
        // Добавляем
        state.lobbyUsers.push(action.payload.user)
        return
      }

      // Обновляем
      state.lobbyUsers[index] = action.payload.user
    },
    emitRequestUsers: () => {
      socket.emit(E_Emit.requestLobbyUsers)
    },
  },
})

export const { setUsers, emitRequestUsers, updateUser } = usersPanelSlice.actions
