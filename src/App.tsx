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
import { TippyStyles } from 'styles/tippy'
import { CustomToast } from 'styles/toastify'

import 'assets/fonts/rubik/rubik.css'
import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'

export const App = () => {
  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.profile.statuses.isAuth)

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
      <ModalManager />
      <SidePanel />
      <GlobalStyles />
      <TippyStyles />
      <CustomToast />
    </>
  )
}
