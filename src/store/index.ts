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

import { appSlice } from './app'
import { profileSlice } from './profile'

import { authFormSlice } from 'features/AuthForm/slice'
import { headerSlice } from 'features/Header/slice'
import { restoreSlice } from 'features/Modals/components/RestorePassword/slice'
import { modalsSlice } from 'features/Modals/slice'
import { sideMenuSlice } from 'features/SideMenu/slice'
import { usersPanelSlice } from 'features/SidePanel/components/UsersPanel/slice'
import { sidePanelSlice } from 'features/SidePanel/slice'

import { authAPI } from 'services/auth'

const persistConfig = {
  key: 'slov-dice',
  storage,
  whitelist: [profileSlice.name, appSlice.name],
}

const rootReducer = combineReducers({
  [profileSlice.name]: profileSlice.reducer,
  [appSlice.name]: appSlice.reducer,

  [authFormSlice.name]: authFormSlice.reducer,
  [modalsSlice.name]: modalsSlice.reducer,
  [headerSlice.name]: headerSlice.reducer,
  [sideMenuSlice.name]: sideMenuSlice.reducer,
  [sidePanelSlice.name]: sidePanelSlice.reducer,

  [restoreSlice.name]: restoreSlice.reducer,
  [usersPanelSlice.name]: usersPanelSlice.reducer,

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
