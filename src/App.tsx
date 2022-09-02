import { useLayoutEffect, useEffect } from 'react'

import { connectAuthenticatedUser } from 'features/AuthForm/utils/dispatchers'
import { Modal } from 'features/Modals'
import { SidePanel } from 'features/SidePanel'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Emit } from 'models/socket/lobbyUsers'
import { AppRoutes } from 'routes'
import { authAPI } from 'services/auth'
import { socket } from 'services/socket'
import { GlobalStyles } from 'styles/global'
import { CustomToast } from 'styles/toastify'

import 'assets/fonts/rubik/rubik.css'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  const dispatch = useStoreDispatch()
  const { isAuth } = useStoreSelector((state) => ({
    language: state.app.language,
    isAuth: state.profile.statuses.isAuth,
  }))

  const [fetchCheck, { isSuccess, isLoading, data }] = authAPI.useCheckMutation()
  authAPI.useCheckTokenQuery(null, {
    pollingInterval: 60_000 * 10,
    skip: !isAuth,
  })

  useLayoutEffect(() => {
    fetchCheck()
  }, [fetchCheck])

  useEffect(() => {
    if (isSuccess && data) {
      connectAuthenticatedUser(data, dispatch)
    }
  }, [isSuccess, data, dispatch])

  return (
    <>
      {!isLoading && <AppRoutes />}
      <GlobalStyles />
      <Modal />
      <SidePanel />
      <CustomToast />
    </>
  )
}
