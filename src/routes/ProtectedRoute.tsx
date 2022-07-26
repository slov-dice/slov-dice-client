import { Navigate, Outlet } from 'react-router-dom'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { MainLayout } from 'layouts/Main'
import { E_Routes } from 'utils/constants/routes'

export const ProtectedRoute = () => {
  const isAuth = useStoreSelector((state) => state.profile.isAuth)

  if (isAuth) {
    return (
      <MainLayout>
        <Outlet />
      </MainLayout>
    )
  }

  return <Navigate to={E_Routes.auth} />
}
