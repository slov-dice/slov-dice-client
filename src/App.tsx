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
import { ReactQuillStyles } from 'styles/libs/react-quill'
import { TippyStyles } from 'styles/libs/tippy'
import { CustomToast } from 'styles/libs/toastify'

import 'assets/fonts/rubik/rubik.css'
import 'react-toastify/dist/ReactToastify.css'
import 'tippy.js/dist/tippy.css'
import 'react-quill/dist/quill.snow.css'

export const App = () => {
  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((store) => store.profile.statuses.isAuth)
  useStoreSelector((store) => store.app.language)

  const [fetchCheck, { isSuccess, data, isLoading }] = authAPI.useCheckMutation()
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
      {!isLoading && <AppRoutes />}
      <ModalManager />
      <SidePanel />
      <GlobalStyles />
      <TippyStyles />
      <ReactQuillStyles />
      <CustomToast />
    </>
  )
}
