import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { IntroduceRoute } from './IntroduceRoute'

import { Header } from 'features/Header'
import * as Pages from 'pages'
import { E_Routes } from 'utils/constants/routes'

export const AppRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      {location.pathname !== E_Routes.auth && <Header />}
      <Routes key={location.key} location={location}>
        <Route element={<IntroduceRoute />}>
          <Route path={E_Routes.home} element={<Pages.Home />} />
          <Route path={E_Routes.auth} element={<Pages.Auth />} />
        </Route>
        <Route path='*' element={<Navigate to={E_Routes.home} />} />
      </Routes>
    </AnimatePresence>
  )
}
