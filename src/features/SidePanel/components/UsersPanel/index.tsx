import { useLayoutEffect, useMemo, useState } from 'react'

import { emitRequestUsers } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { Button } from 'components/Buttons'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const UsersPanel = () => {
  const dispatch = useStoreDispatch()

  const [isLobbyUsers, setIsLobbyUsers] = useState(true)

  const { lobbyUsers, roomUsers } = useStoreSelector((state) => ({
    lobbyUsers: state.usersPanel.lobbyUsers,
    roomUsers: state.room.users,
  }))

  const roomUsersToLobbyUsers = useMemo(
    () =>
      lobbyUsers.filter((lobbyUser) =>
        roomUsers.some((roomUser) => roomUser.userId === lobbyUser.id),
      ),
    [lobbyUsers, roomUsers],
  )

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(emitRequestUsers())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  const handleOpenLobbyUsers = () => {
    setIsLobbyUsers(true)
  }

  const handleOpenRoomUsers = () => {
    setIsLobbyUsers(false)
  }

  return (
    <S.UsersPanel>
      <span>Users</span>
      <div>
        <Button mod={Button.mod.secondary} onClick={handleOpenLobbyUsers}>
          LOBBY
        </Button>
        <Button mod={Button.mod.secondary} onClick={handleOpenRoomUsers}>
          ROOM
        </Button>
      </div>
      <pre style={{ overflow: 'auto', height: 600 }}>
        {isLobbyUsers
          ? lobbyUsers.length
            ? JSON.stringify(lobbyUsers, undefined, 2)
            : '...'
          : roomUsersToLobbyUsers.length
          ? JSON.stringify(roomUsersToLobbyUsers, undefined, 2)
          : '...'}
      </pre>
    </S.UsersPanel>
  )
}
