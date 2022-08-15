import { motion } from 'framer-motion'

import { Navigation } from './extensions/Navigation'
import * as S from './styles'
import { sideMenuContainerVariants, sideMenuOverlayVariants } from './variants'

import { toggleSideMenu } from 'features/Header/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { closeSidePanel } from 'store/app'

export const SideMenu = () => {
  const { sideMenuVisible, sidePanel } = useStoreSelector((state) => ({
    sideMenuVisible: state.header.sideMenu,
    sidePanel: state.app.sidePanel,
  }))
  const dispatch = useStoreDispatch()

  const handleToggle = () => {
    dispatch(toggleSideMenu())
    if (!sideMenuVisible && sidePanel !== null) {
      dispatch(closeSidePanel())
    }
  }

  const height = window.innerHeight

  return (
    <motion.div
      initial={false}
      animate={sideMenuVisible ? 'opened' : 'closed'}
      exit='closed'
      custom={height}
    >
      <S.Container variants={sideMenuContainerVariants} />
      <Navigation toggleMenu={handleToggle} />
      <S.Overlay variants={sideMenuOverlayVariants} onClick={handleToggle} />
    </motion.div>
  )
}
