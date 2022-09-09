import { AnimatePresence } from 'framer-motion'
import { useCallback } from 'react'

import { modalComponents } from './components'
import { closeModal } from './slice'
import * as S from './styles'

import { useEventListener } from 'hooks/useEventListener'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const ModalManager = () => {
  const dispatch = useStoreDispatch()
  const modals = useStoreSelector((state) => state.modalManager.modals)

  const handleClose = useCallback(() => {
    dispatch(closeModal())
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
    <AnimatePresence mode='wait'>
      {Boolean(modals.length) && (
        <S.Wrapper>
          <AnimatePresence>
            {modals.map((modal, index) => {
              const Modal = modalComponents[modal.content]
              return (
                <S.Container key={modal.content} order={index}>
                  <S.Overlay onClick={handleClose} />
                  <Modal />
                </S.Container>
              )
            })}
          </AnimatePresence>
        </S.Wrapper>
      )}
    </AnimatePresence>
  )
}
