import { Navigation } from './components/Navigation'
import { toggleSideMenu } from './slice'
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
    dispatch(toggleSideMenu())
    if (!sideMenuVisible && sidePanel !== null) {
      dispatch(closeSidePanel())
    }
  }

  return (
    <div>
      <S.Container />
      <Navigation toggleMenu={handleToggle} />
      <S.Overlay onClick={handleToggle} />
    </div>
  )
}
