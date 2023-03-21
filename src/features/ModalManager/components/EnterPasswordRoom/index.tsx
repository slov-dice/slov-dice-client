import { ChangeEvent, useContext, useState } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import { TextField } from 'components/InputFields'
import { modalManagerContext } from 'features/ModalManager/context'
import { modalManagerActions } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { appActions } from 'store/app'
import { E_AppLoader } from 'store/app/data'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const EnterPasswordRoom = () => {
  const dispatch = useStoreDispatch()
  const { enterPasswordRoomPayload } = useContext(modalManagerContext)
  const [passwordValue, setPasswordValue] = useState('')

  const handleChangePasswordValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(target.value)
  }

  const handleClose = () => {
    dispatch(modalManagerActions.closeModal())
  }

  const handleJoinRoom = () => {
    if (passwordValue.trim()) {
      dispatch(appActions.setLoading({ loader: E_AppLoader.isRoomJoining, status: false }))
      dispatch(
        roomActions.emitJoinRoom({
          roomId: enterPasswordRoomPayload.roomId,
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
          <C.Divider />
          <TextField
            value={passwordValue}
            onChange={handleChangePasswordValue}
            placeholder={t('modals.enterPasswordRoom.fields.password')}
            fullWidth
          />
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
