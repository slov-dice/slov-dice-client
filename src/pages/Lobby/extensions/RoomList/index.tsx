import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from 'components/Buttons'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_RoomType, I_PreviewRoom } from 'models/app'
import { emitJoinRoom } from 'store/room'
import * as C from 'styles/components'

export const RoomList = () => {
  const dispatch = useStoreDispatch()
  const navigate = useNavigate()
  const { rooms, currentRoomId, isUserInRoom } = useStoreSelector((state) => ({
    rooms: state.lobbyPage.rooms,
    currentRoomId: state.room.id,
    isUserInRoom: state.profile.statuses.inRoom,
  }))

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
      dispatch(emitJoinRoom({ roomId: room.id, password }))
      return
    }

    // Вход в комнату если она публичная
    dispatch(emitJoinRoom({ roomId: room.id }))
  }

  const handleBackToTheRoom = () => {
    navigate(`/room/${currentRoomId}`)
  }

  return (
    <div>
      <C.Title>Room list</C.Title>
      <C.Divider decorated />
      {rooms.length ? (
        <div>
          {rooms.map((room) => (
            <div key={room.id} style={{ width: 400 }}>
              <pre>{JSON.stringify(room, null, 2)}</pre>
              {currentRoomId === room.id ? (
                <Button onClick={handleBackToTheRoom}>RETURN</Button>
              ) : (
                <Button onClick={handleJoin(room)}>JOIN</Button>
              )}
              <C.Divider />
            </div>
          ))}
        </div>
      ) : (
        '...'
      )}
    </div>
  )
}
