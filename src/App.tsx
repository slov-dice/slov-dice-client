import { Modal } from 'features/Modals'
import { SidePanel } from 'features/SidePanel'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { AppRoutes } from 'routes'
import { GlobalStyles } from 'styles/global'
import { CustomToast } from 'styles/toastify'

import 'assets/fonts/rubik/rubik.css'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  useStoreSelector((state) => state.app.language)

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
