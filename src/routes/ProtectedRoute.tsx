import { Outlet } from 'react-router-dom'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { AuthLayout } from 'layouts/Auth'

export const ProtectedRoute = () => {
  const isAuth = useStoreSelector((state) => state.profile.statuses.isAuth)

  if (isAuth) {
    return <Outlet />
  }

  return <AuthLayout />
}
