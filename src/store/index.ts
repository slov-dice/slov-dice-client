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

import authSlice from './auth'
import profileSlice from './profile'
import uiSlice from './ui'

import authFormSlice from 'features/AuthForm/slice'
import modalsManagerSlice from 'features/Modals/slice'

import { authAPI } from 'services/auth'

const persistConfig = {
  key: 'slov-dice',
  storage,
  whitelist: [profileSlice.name, uiSlice.name],
}

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [profileSlice.name]: profileSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,

  [authFormSlice.name]: authFormSlice.reducer,
  [modalsManagerSlice.name]: modalsManagerSlice.reducer,

  [authAPI.reducerPath]: authAPI.reducer,
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
