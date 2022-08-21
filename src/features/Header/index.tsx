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
  const { sideMenuVisible, sidePanel } = useStoreSelector((state) => ({
    sideMenuVisible: state.sideMenu.isOpen,
    sidePanel: state.sidePanel.panel,
  }))

  const { pathname } = useLocation()

  const dispatch = useStoreDispatch()

  const [isTransparent, setTransparent] = useState(true)

  const handleToggleSideMenu = () => {
    dispatch(toggleSideMenu())

    if (!sideMenuVisible && sidePanel !== null) {
      dispatch(closeSidePanel())
    }
  }

  const handleScroll = () => {
    setTransparent(window.scrollY <= 0)
  }
  useEventListener('scroll', handleScroll)

  useEffect(() => {
    if (pathname === E_Routes.lobby) {
      setTransparent(false)
    } else {
      setTransparent(true)
    }
  }, [pathname])

  return (
    <S.Header isTransparent={isTransparent} key='header'>
      <S.WrapperControl sideMenuVisible={sideMenuVisible}>
        <Control onClick={handleToggleSideMenu} />
        <SideMenu />
      </S.WrapperControl>
      <Logo />
      <Toolbar />
    </S.Header>
  )
}
