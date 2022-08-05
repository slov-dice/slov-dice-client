import { Modal } from 'features/Modals'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { AppRoutes } from 'routes'
import { GlobalStyles } from 'styles/global'

import 'assets/fonts/rubik/rubik.css'

export const App = () => {
  useStoreSelector((state) => state.ui.language)

  return (
    <>
      <AppRoutes />
      <GlobalStyles />
      <Modal />
    </>
  )
}
