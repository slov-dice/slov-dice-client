import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { I_LobbyUser } from 'models/app'
import { E_Subscribe, I_SubscriptionData, E_Emit } from 'models/socket/lobbyUsers'
import { socket } from 'services/socket'

export const subscribe = createAsyncThunk('restore/restoreCheckEmail', async (_, { dispatch }) => {
  socket.on(E_Subscribe.getLobbyUsers, (data: I_SubscriptionData[E_Subscribe.getLobbyUsers]) => {
    dispatch(setUsers(data))
  })

  socket.on(
    E_Subscribe.getUpdatedLobbyUser,
    (data: I_SubscriptionData[E_Subscribe.getUpdatedLobbyUser]) => {
      dispatch(updateUser(data))
    },
  )
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getLobbyUsers)
}

interface I_InitialState {
  users: I_LobbyUser[]
}

const initialState: I_InitialState = {
  users: [],
}

export const usersPanelSlice = createSlice({
  name: 'usersPanel',
  initialState: initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<I_SubscriptionData[E_Subscribe.getLobbyUsers]>) => {
      state.users = action.payload.users
    },
    updateUser: (
      state,
      action: PayloadAction<I_SubscriptionData[E_Subscribe.getUpdatedLobbyUser]>,
    ) => {
      const index = state.users.findIndex((user) => user.id === action.payload.user.id)

      // Если nickname пустой (логоут гостя)
      if (!action.payload.user.nickname) {
        // Удаляем пользователя
        state.users.splice(index, 1)
        return
      }

      // Если пользователь не найден
      if (index < 0) {
        // Добавляем
        state.users.push(action.payload.user)
        return
      }

      // Обновляем
      state.users[index] = action.payload.user
    },
    emitRequestUsers: () => {
      socket.emit(E_Emit.requestLobbyUsers)
    },
  },
})

export const { setUsers, emitRequestUsers, updateUser } = usersPanelSlice.actions
