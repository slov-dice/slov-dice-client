import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import * as S from './styles'

import LockIcon from 'assets/icons/app/lock.svg'
import { Button } from 'components/Buttons'
import { E_Modal } from 'features/ModalManager/models'
import { openModal } from 'features/ModalManager/slice'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_RoomType, I_PreviewRoom } from 'models/shared/app'
import { roomActions } from 'store/room'
import * as C from 'styles/components'
import { E_MediaQuery } from 'styles/theme'

export const RoomList = () => {
  const dispatch = useStoreDispatch()
  const navigate = useNavigate()
  const { rooms, currentRoomId, isUserInRoom } = useStoreSelector((store) => ({
    rooms: store.lobbyPage.rooms,
    currentRoomId: store.room.id,
    isUserInRoom: store.profile.statuses.inRoom,
  }))
  const isMatch = useMediaQuery(E_MediaQuery.lg)

  const handleJoin = (room: I_PreviewRoom) => () => {
    // Если комната переполнена
    if (room.currentSize >= room.size) {
      toast.error(t('notification.roomFull'))
      return
    }

    // Если пользователь в комнате
    if (isUserInRoom) {
      const result = confirm(
        'Вы уже находитесь в комнате. Хотите покинуть её и подключиться к другой?',
      )
      // Если пользователь не хочет покидать комнату
      if (!result) return
    }

    // Вход в комнату, если есть пароль
    if (room.type === E_RoomType.private) {
      const password = prompt('Enter the password') || ''
      dispatch(roomActions.emitJoinRoom({ roomId: room.id, password }))
      return
    }

    // Вход в комнату если она публичная
    dispatch(roomActions.emitJoinRoom({ roomId: room.id }))
  }

  const handleOpenModal = () => {
    dispatch(openModal(E_Modal.createRoom))
  }

  const handleBackToTheRoom = () => {
    navigate(`/room/${currentRoomId}`)
  }

  return (
    <>
      <S.TopSection>
        <C.Title>{t('lobby.title')}</C.Title>
        <S.CreateWrapper>
          <Button onClick={handleOpenModal} size={Button.size.sm}>
            {t('lobby.actions.create')}
          </Button>
        </S.CreateWrapper>
      </S.TopSection>
      <C.Divider decorated />
      {rooms.length ? (
        <S.RoomList>
          {rooms.map((room) => {
            const inRoom = currentRoomId === room.id
            return (
              <S.RoomCard key={room.id}>
                <S.RoomCardTitle>{room.name}</S.RoomCardTitle>
                <S.RoomCardInfo>
                  <div>{room.type === E_RoomType.private && <LockIcon />}</div>
                  <div>
                    {room.currentSize}/{room.size}
                  </div>
                </S.RoomCardInfo>
                <S.RoomCardAction isMatch={isMatch}>
                  <button onClick={inRoom ? handleBackToTheRoom : handleJoin(room)}>
                    {inRoom ? t('lobby.actions.return') : t('lobby.actions.join')}
                  </button>
                </S.RoomCardAction>
              </S.RoomCard>
            )
          })}
        </S.RoomList>
      ) : (
        <S.NoRoomsWrapper>{t('lobby.noRoomsCreated')}</S.NoRoomsWrapper>
      )}
    </>
  )
}
