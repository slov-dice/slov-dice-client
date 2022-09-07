import { useLayoutEffect, useEffect } from 'react'

import { connectAuthenticatedUser } from 'features/AuthForm/utils/dispatchers'
import { ModalManager } from 'features/ModalManager'
import { SidePanel } from 'features/SidePanel'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { AppRoutes } from 'routes'
import { authAPI } from 'services/auth'
import { subscribe, unsubscribe } from 'store/room/socket'
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

  const [fetchCheck, { isSuccess, data }] = authAPI.useCheckMutation()
  authAPI.useCheckTokenQuery(null, {
    pollingInterval: 60_000 * 10,
    skip: !isAuth,
  })

  useEffect(() => {
    dispatch(subscribe())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

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
      <AppRoutes />
      <GlobalStyles />
      <ModalManager />
      <SidePanel />
      <CustomToast />
    </>
  )
}
