import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import { FramerRoute } from './FramerRoute'
import { LazyRoute } from './LazyRoute'
import { ProtectedRoute } from './ProtectedRoute'

import { Header } from 'features/Header'
import { E_Routes } from 'models/routes'

const HomePage = LazyRoute(() => import('pages/Home'))
const AuthCallbackPage = LazyRoute(() => import('pages/AuthCallback'))
const LobbyPage = LazyRoute(() => import('pages/Lobby'))
const RoomPage = LazyRoute(() => import('pages/Room'))
const VerificationPage = LazyRoute(() => import('pages/Verification'))

export const AppRoutes = () => {
  const location = useLocation()

  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <Routes key={location.key} location={location}>
          <Route element={<FramerRoute />}>
            <Route element={<ProtectedRoute />}>
              <Route path={E_Routes.lobby} element={LobbyPage} />
              <Route path={E_Routes.room} element={RoomPage} />
            </Route>
            <Route path={E_Routes.home} element={HomePage} />
            <Route path={E_Routes.verification} element={VerificationPage} />
            <Route path={E_Routes.authCallback} element={AuthCallbackPage} />
            <Route path='*' element={HomePage} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
