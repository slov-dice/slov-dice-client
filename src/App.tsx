import { useLayoutEffect } from 'react'

import { Modal } from 'features/Modals'
import { SidePanel } from 'features/SidePanel'
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
  useStoreSelector((state) => state.app.language)

  const { isAuth, profileId } = useStoreSelector((state) => ({
    isAuth: state.profile.statuses.isAuth,
    profileId: state.profile.id,
  }))

  const [fetchCheck, progressCheck] = authAPI.useCheckMutation()

  useLayoutEffect(() => {
    fetchCheck()
  }, [fetchCheck])

  console.table(progressCheck)

  useLayoutEffect(() => {
    if (isAuth && profileId) {
      socket.emit(E_Emit.setLobbyUserOnline, { userId: profileId })
    }
  }, [isAuth, profileId])

  return (
    <>
      <AppRoutes />
      <GlobalStyles />
      <Modal />
      <SidePanel />
      <CustomToast />
    </>
  )
}
