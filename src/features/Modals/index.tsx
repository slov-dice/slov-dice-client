import { AnimatePresence } from 'framer-motion'
import { useCallback } from 'react'

import { ModalComponents } from './components'
import { closeModal } from './slice'
import * as S from './styles'

import { useEventListener } from 'hooks/useEventListener'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const Modal = () => {
  const dispatch = useStoreDispatch()
  const modals = useStoreSelector((state) => state.modalsManager.modals)

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
    <AnimatePresence exitBeforeEnter>
      {Boolean(modals.length) && (
        <S.Wrapper>
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
        </S.Wrapper>
      )}
    </AnimatePresence>
  )
}
