import { AnimatePresence } from 'framer-motion'
import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { FramerRoute } from './FramerRoute'
import { ProtectedRoute } from './ProtectedRoute'

import { Header } from 'features/Header'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import { E_Emit } from 'models/socket/lobbyUsers'
import * as Pages from 'pages'
import { socket } from 'services/socket'

export const AppRoutes = () => {
  const location = useLocation()
  const { isAuth, profileId } = useStoreSelector((state) => ({
    isAuth: state.profile.statuses.isAuth,
    profileId: state.profile.id,
  }))

  useLayoutEffect(() => {
    if (isAuth && profileId) {
      socket.emit(E_Emit.setLobbyUserOnline, { userId: profileId })
    }
  }, [isAuth, profileId])

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.key} location={location}>
          <Route element={<FramerRoute />}>
            <Route element={<ProtectedRoute />}>
              <Route path={E_Routes.lobby} element={<Pages.Lobby />} />
            </Route>
            <Route path={E_Routes.home} element={<Pages.Home />} />
            <Route path={E_Routes.room} element={<Pages.Room />} />
            <Route path={E_Routes.verification} element={<Pages.Verification />} />
            <Route path={E_Routes.authCallback} element={<Pages.AuthCallback />} />
            <Route path='*' element={<Pages.NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
