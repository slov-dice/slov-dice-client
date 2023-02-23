import { AnimatePresence } from 'framer-motion'

import { Navigation } from './extensions/Navigation'
import { sideMenuActions } from './slice'
import * as S from './styles'

import { closeSidePanel } from 'features/SidePanel/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const SideMenu = () => {
  const { sideMenuVisible, sidePanel } = useStoreSelector((store) => ({
    sideMenuVisible: store.sideMenu.isOpen,
    sidePanel: store.sidePanel.panel,
  }))
  const dispatch = useStoreDispatch()

  const handleToggle = () => {
    dispatch(sideMenuActions.toggleSideMenu())
    if (!sideMenuVisible && sidePanel !== null) {
      dispatch(closeSidePanel())
    }
  }

  return (
    <AnimatePresence>
      {sideMenuVisible && (
        <S.Container>
          <S.SideMenuWrapper>
            <Navigation toggleMenu={handleToggle} />
            <b>v{APP_VERSION}</b>
          </S.SideMenuWrapper>
          <S.Overlay onClick={handleToggle} />
        </S.Container>
      )}
    </AnimatePresence>
  )
}
