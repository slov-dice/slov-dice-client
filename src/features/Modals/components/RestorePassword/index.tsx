import { AnimatePresence } from 'framer-motion'
import { useLayoutEffect, useState } from 'react'

import { ChangePassword } from './extensions/ChangePassword'
import { EmailConfirm } from './extensions/EmailConfirm'
import * as S from './styles'

import BackIcon from 'assets/icons/arrow-left.svg'
import CloseIcon from 'assets/icons/close.svg'
import { BackButton } from 'components/BackButton'
import { getRestoreCheckEmail, restoreUnsubscribe } from 'features/AuthForm/slice'
import { closeModal } from 'features/Modals/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import * as C from 'styles/components'

export enum E_ModalContent {
  emailConfirm = 'emailConfirm',
  changePassword = 'changePassword',
}

export const ResetPasswordModal = () => {
  const [modalContent, setModalContent] = useState<E_ModalContent>(E_ModalContent.emailConfirm)

  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleBackButton = () => {
    setModalContent(E_ModalContent.emailConfirm)
  }

  useLayoutEffect(() => {
    dispatch(getRestoreCheckEmail())

    return () => {
      restoreUnsubscribe()
    }
  }, [dispatch])

  return (
    <S.Window>
      <AnimatePresence exitBeforeEnter>
        {modalContent === E_ModalContent.changePassword && (
          <BackButton onClick={handleBackButton}>
            <BackIcon />
          </BackButton>
        )}
      </AnimatePresence>
      <S.WindowClose onClick={handleClose}>
        <CloseIcon />
      </S.WindowClose>
      <C.Title>{t('modals.restorePassword.title')}</C.Title>
      <C.Divider />
      <AnimatePresence exitBeforeEnter>
        {modalContent === E_ModalContent.emailConfirm ? (
          <EmailConfirm key='EmailConfirm' setModalContent={setModalContent} />
        ) : (
          <ChangePassword key='ChangePassword' />
        )}
      </AnimatePresence>
    </S.Window>
  )
}
