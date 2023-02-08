import { ChangeEvent, useContext, useState } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import { TextField } from 'components/InputFields'
import { modalManagerContext } from 'features/ModalManager/context'
import { modalManagerActions } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const ConfirmLeaveRoom = () => {
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(modalManagerActions.closeModal())
  }

  const handleJoinRoom = () => {
    if (passwordValue.trim()) {
      dispatch(
        roomActions.emitJoinRoom({
          password: passwordValue,
        }),
      )
    }
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.enterPasswordRoom.title')}</C.Title>

      <S.ModalContent>
        <div>
          <C.Divider />
          <p>{t('modals.enterPasswordRoom.paragraph')}</p>
        </div>

        <div>
          <C.Divider decorated />
          <S.ModalActions>
            <Button onClick={handleClose} mod={Button.mod.primary}>
              {t('modals.enterPasswordRoom.actions.cancel')}
            </Button>
            <Button onClick={handleJoinRoom}>{t('modals.enterPasswordRoom.actions.join')}</Button>
          </S.ModalActions>
        </div>
      </S.ModalContent>
    </S.Modal>
  )
}
