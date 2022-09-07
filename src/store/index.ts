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
import { roomSlice } from './room'

import { authFormSlice } from 'features/AuthForm/slice'
import { headerSlice } from 'features/Header/slice'
import { restoreSlice } from 'features/ModalManager/components/RestorePassword/slice'
import { modalManagerSlice } from 'features/ModalManager/slice'
import { sideMenuSlice } from 'features/SideMenu/slice'
import { chatPanelSlice } from 'features/SidePanel/components/ChatPanel/slice'
import { usersPanelSlice } from 'features/SidePanel/components/UsersPanel/slice'
import { sidePanelSlice } from 'features/SidePanel/slice'
import { windowManagerSlice } from 'features/WindowManager/slice'
import { rtkQueryErrorLogger } from 'middlewares/rtkQueryErrorLogger'
import { rtkQueryFulfilledLogger } from 'middlewares/rtkQueryFulfilledLogger'
import { lobbyPageSlice } from 'pages/Lobby/slice'
import { roomPageSlice } from 'pages/Room/slice'
import { authAPI } from 'services/auth'

const persistConfig = {
  key: 'slov-dice',
  storage,
  whitelist: [appSlice.name],
}

const rootReducer = combineReducers({
  // Global slices
  [profileSlice.name]: profileSlice.reducer,
  [appSlice.name]: appSlice.reducer,
  [roomSlice.name]: roomSlice.reducer,

  // Feature slices
  [authFormSlice.name]: authFormSlice.reducer,
  [headerSlice.name]: headerSlice.reducer,
  [sideMenuSlice.name]: sideMenuSlice.reducer,
  [sidePanelSlice.name]: sidePanelSlice.reducer,
  [modalManagerSlice.name]: modalManagerSlice.reducer,
  [windowManagerSlice.name]: windowManagerSlice.reducer,

  // Component slices
  [restoreSlice.name]: restoreSlice.reducer,
  [usersPanelSlice.name]: usersPanelSlice.reducer,
  [chatPanelSlice.name]: chatPanelSlice.reducer,
  [lobbyPageSlice.name]: lobbyPageSlice.reducer,
  [roomPageSlice.name]: roomPageSlice.reducer,

  // Services
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
    }).concat(authAPI.middleware, rtkQueryErrorLogger, rtkQueryFulfilledLogger),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
