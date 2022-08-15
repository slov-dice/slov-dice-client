import { AnimatePresence } from 'framer-motion'
import { useLayoutEffect } from 'react'

import { ChangePassword } from './extensions/ChangePassword'
import { EmailConfirm } from './extensions/EmailConfirm'
import { E_ModalContent } from './models'
import { setRestoreModalContent, subscribe, unsubscribe } from './slice'
import * as S from './styles'

import BackIcon from 'assets/icons/arrow-left.svg'
import CloseIcon from 'assets/icons/close.svg'
import { BackButton } from 'components/BackButton'
import { closeModal } from 'features/Modals/slice'
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
    <S.Window>
      <AnimatePresence exitBeforeEnter>
        {content === E_ModalContent.changePassword && (
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
        {content === E_ModalContent.emailConfirm ? <EmailConfirm /> : <ChangePassword />}
      </AnimatePresence>
    </S.Window>
  )
}
