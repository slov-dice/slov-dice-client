import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { FramerRoute } from './FramerRoute'
import { ProtectedRoute } from './ProtectedRoute'

import { Header } from 'features/Header'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import * as Pages from 'pages'

export const AppRoutes = () => {
  const location = useLocation()
  const isAuthFormOpen = useStoreSelector((state) => state.authForm.isOpen)
  return (
    <>
      <AnimatePresence exitBeforeEnter>{!isAuthFormOpen && <Header />}</AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.key} location={location}>
          <Route element={<FramerRoute />}>
            <Route element={<ProtectedRoute />}>
              <Route path={E_Routes.lobby} element={<Pages.Lobby />} />
            </Route>
            <Route path={E_Routes.home} element={<Pages.Home />} />
            <Route path='*' element={<Navigate to={E_Routes.home} />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
