import { motion } from 'framer-motion'
import { useState } from 'react'

import { Control } from './components/Control'
import { SideMenu } from './components/SideMenu'
import { Toolbar } from './components/Toolbar'
import * as S from './styles'

import { Logo } from 'components/Logo'
import { useEventListener } from 'hooks/useEventListener'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { closeSidePanel, toggleSideMenu } from 'store/ui'

export const Header = () => {
  const { sideMenuVisible, sidePanel } = useStoreSelector((state) => ({
    sideMenuVisible: state.ui.sideMenu,
    sidePanel: state.ui.sidePanel,
  }))

  const dispatch = useStoreDispatch()

  const [isTop, setTop] = useState(true)

  const handleToggleSideMenu = () => {
    dispatch(toggleSideMenu())

    if (!sideMenuVisible && sidePanel !== null) {
      dispatch(closeSidePanel())
    }
  }

  const handleScroll = () => {
    setTop(window.scrollY <= 0)
  }
  useEventListener('scroll', handleScroll)

  return (
    <S.Header isTop={isTop} key='header'>
      <motion.div initial={false} animate={sideMenuVisible ? 'opened' : 'closed'} exit='closed'>
        <Control onClick={handleToggleSideMenu} />
        <SideMenu />
      </motion.div>
      <Logo />
      <Toolbar />
    </S.Header>
  )
}
