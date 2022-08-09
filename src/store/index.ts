import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import lobbySlice from './lobby'
// import roomSlice from './room'
import profileSlice from './profile'
import uiSlice from './ui'

import authFormSlice from 'features/AuthForm/slice'
import modalsManagerSlice from 'features/Modals/slice'

import { authAPI } from 'services/auth'
// import lobbyChatAPI from 'services/lobbyChat'
// import { lobbyUsersAPI } from 'services/lobbyUsers'

const persistConfig = {
  key: 'slov-dice',
  storage,
  whitelist: [profileSlice.name, uiSlice.name],
}

const rootReducer = combineReducers({
  [profileSlice.name]: profileSlice.reducer,
  // [roomSlice.name]: roomSlice.reducer,
  // [lobbySlice.name]: lobbySlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
  [authFormSlice.name]: authFormSlice.reducer,
  [modalsManagerSlice.name]: modalsManagerSlice.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  // [lobbyChatAPI.reducerPath]: lobbyChatAPI.reducer,
  // [lobbyUsersAPI.reducerPath]: lobbyUsersAPI.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authAPI.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
