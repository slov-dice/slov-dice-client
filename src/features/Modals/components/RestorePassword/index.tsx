import { useState } from 'react'

import { ChangePassword } from './extensions/ChangePassword'
import { EmailConfirm } from './extensions/EmailConfirm'
import * as S from './styles'

import CloseIcon from 'assets/icons/close.svg'
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

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <CloseIcon />
      </S.WindowClose>
      <C.Title>{t('modals.restorePassword.title')}</C.Title>
      <C.Divider />
      {modalContent === E_ModalContent.emailConfirm ? (
        <EmailConfirm setModalContent={setModalContent} />
      ) : (
        <ChangePassword setModalContent={setModalContent} />
      )}
    </S.Window>
  )
}
