import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Control } from './components/Control'
import { Toolbar } from './components/Toolbar'
import * as S from './styles'

import { Logo } from 'components/Logo'
import { SideMenu } from 'features/SideMenu'
import { toggleSideMenu } from 'features/SideMenu/slice'
import { closeSidePanel } from 'features/SidePanel/slice'
import { useEventListener } from 'hooks/useEventListener'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'

export const Header = () => {
  const { isAuthFormOpen, sideMenuVisible, sidePanel } = useStoreSelector((state) => ({
    sideMenuVisible: state.sideMenu.isOpen,
    sidePanel: state.sidePanel.panel,
    isAuthFormOpen: state.authForm.isOpen,
  }))
  const dispatch = useStoreDispatch()

  const { pathname } = useLocation()

  const isGameRoutes = pathname === '/lobby' || pathname.includes('/room')
  const [isTransparent, setTransparent] = useState(true)

  const isVisible =
    !isAuthFormOpen &&
    location.pathname !== E_Routes.verification &&
    location.pathname !== E_Routes.authCallback

  const handleToggleSideMenu = () => {
    dispatch(toggleSideMenu())

    if (!sideMenuVisible && sidePanel !== null) {
      dispatch(closeSidePanel())
    }
  }

  const handleScroll = () => {
    console.log('handleScroll')
    if (isGameRoutes) {
      setTransparent(window.scrollY <= 0)
    }
  }
  useEventListener('scroll', handleScroll)

  useEffect(() => {
    if (isGameRoutes) {
      setTransparent(false)
    } else {
      setTransparent(true)
    }
  }, [isGameRoutes, pathname])

  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <S.Header isTransparent={isTransparent}>
          <S.WrapperControl sideMenuVisible={sideMenuVisible}>
            <Control onClick={handleToggleSideMenu} />
            <SideMenu />
          </S.WrapperControl>
          <Logo />
          <Toolbar />
        </S.Header>
      )}
    </AnimatePresence>
  )
}
