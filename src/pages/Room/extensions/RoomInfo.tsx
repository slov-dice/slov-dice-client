import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Buttons'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { leaveRoom } from 'store/profile'
import { emitLeaveRoom } from 'store/room'

export const RoomInfo = () => {
  const room = useStoreSelector((store) => store.room)
  const dispatch = useStoreDispatch()
  const navigate = useNavigate()

  const handleLeave = () => {
    dispatch(emitLeaveRoom())
    dispatch(leaveRoom())
    navigate('/lobby')
  }

  return (
    <div>
      {room.id ? (
        <div>
          <pre>{JSON.stringify(room, null, 2)}</pre>
          <Button onClick={handleLeave}>Leave</Button>
        </div>
      ) : (
        'Room not found'
      )}
    </div>
  )
}
