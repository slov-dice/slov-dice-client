import { useContext } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import { modalManagerContext } from 'features/ModalManager/context'
import { E_Modal } from 'features/ModalManager/models'
import { modalManagerActions } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_RoomType } from 'models/shared/app'
import { appActions } from 'store/app'
import { E_AppLoader } from 'store/app/data'
import { profileActions } from 'store/profile'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const ConfirmLeaveRoom = () => {
  const dispatch = useStoreDispatch()
  const { confirmLeaveRoomPayload, setEnterPasswordRoomPayload } = useContext(modalManagerContext)
  const { roomName, isRoomJoining } = useStoreSelector((store) => ({
    roomName: store.room.name,
    isRoomJoining: store.app.loaders.isRoomJoining,
  }))

  const handleClose = () => {
    dispatch(modalManagerActions.closeModal())
  }

  const handleConfirm = () => {
    // Отключаем пользователя от комнаты
    dispatch(roomActions.emitLeaveRoom())
    dispatch(profileActions.leaveRoom())

    // Если комната публичная, то запускаем пользователя
    if (confirmLeaveRoomPayload.roomType === E_RoomType.public) {
      dispatch(appActions.setLoading({ loader: E_AppLoader.isRoomJoining, status: false }))
      dispatch(
        roomActions.emitJoinRoom({
          roomId: confirmLeaveRoomPayload.roomId,
        }),
      )
    }

    // Если комната приватная, то вызываем модальное окно для ввода пароля
    if (confirmLeaveRoomPayload.roomType === E_RoomType.private) {
      handleClose()
      setEnterPasswordRoomPayload({ roomId: confirmLeaveRoomPayload.roomId })
      dispatch(modalManagerActions.openModal(E_Modal.enterPasswordRoom))
    }
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.confirmLeaveRoom.title')}</C.Title>

      <S.ModalContent>
        <div>
          <C.Divider />
          <p>
            {t('modals.confirmLeaveRoom.paragraph1')} <b> {roomName}</b>
          </p>
          <br />
          <p>{t('modals.confirmLeaveRoom.paragraph2')}</p>
        </div>

        <div>
          <C.Divider decorated />
          <S.ModalActions>
            <Button onClick={handleClose} mod={Button.mod.primary}>
              {t('modals.confirmLeaveRoom.actions.cancel')}
            </Button>
            <Button onClick={handleConfirm} disabled={isRoomJoining}>
              {t('modals.confirmLeaveRoom.actions.confirm')}
            </Button>
          </S.ModalActions>
        </div>
      </S.ModalContent>
    </S.Modal>
  )
}
