import { AnimatePresence } from 'framer-motion'
import { useCallback } from 'react'

import { ModalComponents } from './components'
import * as S from './styles'

import { useEventListener } from 'hooks/useEventListener'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { closeModal } from 'store/ui'

export const Modal = () => {
  const dispatch = useStoreDispatch()
  const modals = useStoreSelector((state) => state.ui.modals)

  const handleClose = useCallback(() => {
    dispatch(closeModal(null))
  }, [dispatch])

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose],
  )
  useEventListener('keydown', handleEsc)

  return (
    <AnimatePresence exitBeforeEnter>
      {Boolean(modals.length) && (
        <S.Wrap>
          <AnimatePresence>
            {modals.map((modal, index) => {
              const ModalWindow = ModalComponents[modal.window]
              return (
                <S.Container key={modal.window} order={index}>
                  <S.Overlay onClick={handleClose} />
                  <ModalWindow />
                </S.Container>
              )
            })}
          </AnimatePresence>
        </S.Wrap>
      )}
    </AnimatePresence>
  )
}
