import { AnimatePresence } from 'framer-motion'

import { Panel } from './components'
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
        <S.SidePanelWrapper key={sidePanel}>
          <Content />
        </S.SidePanelWrapper>
      )
    }
    return null
  }

  return (
    <AnimatePresence>
      {sidePanel !== null && (
        <S.Wrapper>
          <S.SidePanel
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ x: { type: 'easeInOut' } }}
          >
            {getPanel()}
          </S.SidePanel>
          <S.Overlay onClick={handleClose} />
        </S.Wrapper>
      )}
    </AnimatePresence>
  )
}
