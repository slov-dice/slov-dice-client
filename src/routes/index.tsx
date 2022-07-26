import { Navigate, Route, Routes } from 'react-router-dom'

import { IntroduceRoute } from './IntroduceRoute'

import * as Pages from 'pages'
import { E_Routes } from 'utils/constants/routes'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<IntroduceRoute />}>
        <Route path={E_Routes.home} element={<Pages.Home />} />
      </Route>
      <Route path='*' element={<Navigate to={E_Routes.home} />} />
      <Route path={E_Routes.auth} element={<Pages.Auth />} />
    </Routes>
  )
}
