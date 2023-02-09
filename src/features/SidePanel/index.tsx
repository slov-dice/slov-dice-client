import { AnimatePresence } from 'framer-motion'

import { Panel } from './extensions'
import { closeSidePanel } from './slice'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const SidePanel = () => {
  const sidePanel = useStoreSelector((store) => store.sidePanel.panel)
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeSidePanel())
  }

  const getPanel = () => {
    if (sidePanel) {
      const Content = Panel[sidePanel]

      return (
        <S.SidePanelInner key={sidePanel}>
          <Content />
        </S.SidePanelInner>
      )
    }
    return null
  }

  return (
    <AnimatePresence>
      {sidePanel !== null && (
        <S.Container>
          <S.SidePanelWrapper>{getPanel()}</S.SidePanelWrapper>
          <S.Overlay onClick={handleClose} />
        </S.Container>
      )}
    </AnimatePresence>
  )
}
