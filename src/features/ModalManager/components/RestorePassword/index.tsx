import { AnimatePresence } from 'framer-motion'
import { useLayoutEffect } from 'react'

import { ChangePassword } from './extensions/ChangePassword'
import { EmailConfirm } from './extensions/EmailConfirm'
import { E_ModalContent } from './models'
import { setRestoreModalContent } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import BackIcon from 'assets/icons/app/arrow-left.svg'
import CloseIcon from 'assets/icons/app/close.svg'
import { BackButton } from 'components/Buttons'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const ResetPasswordModal = () => {
  const content = useStoreSelector((store) => store.restore.content)

  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleBackButton = () => {
    dispatch(setRestoreModalContent(E_ModalContent.emailConfirm))
  }

  useLayoutEffect(() => {
    dispatch(subscribe())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return (
    <S.Modal>
      <AnimatePresence mode='wait'>
        {content === E_ModalContent.changePassword && (
          <BackButton onClick={handleBackButton}>
            <BackIcon />
          </BackButton>
        )}
      </AnimatePresence>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title onClick={() => dispatch(setRestoreModalContent(E_ModalContent.changePassword))}>
        {t('modals.restorePassword.title')}
      </C.Title>
      <C.Divider />
      {content === E_ModalContent.emailConfirm ? <EmailConfirm /> : <ChangePassword />}
    </S.Modal>
  )
}
