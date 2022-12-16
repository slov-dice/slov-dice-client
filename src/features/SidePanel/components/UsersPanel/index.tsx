import { useEffect, useLayoutEffect, useMemo, useState } from 'react'

import { instanceUsersOptions } from './data'
import { User } from './extensions/User'
import { emitRequestUsers } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'
import { sortUsers } from './utils'

import { Switch, T_SwitchOption } from 'components/Switch'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_ChatType } from 'models/shared/app'

export const UsersPanel = () => {
  const dispatch = useStoreDispatch()

  const [usersType, setUsersType] = useState<E_ChatType>(E_ChatType.lobby)
  const [usersOptions, setUsersOptions] = useState(instanceUsersOptions)

  const { lobbyUsers, roomUsers, roomId, profileId } = useStoreSelector((store) => ({
    lobbyUsers: store.usersPanel.lobbyUsers,
    roomUsers: store.room.users,
    roomId: store.room.id,
    profileId: store.profile.id,
  }))

  const sortedLobbyUsers = useMemo(() => sortUsers(lobbyUsers, profileId), [lobbyUsers, profileId])

  const roomUsersToLobbyUsers = useMemo(
    () =>
      sortedLobbyUsers.filter((lobbyUser) =>
        roomUsers.some((roomUser) => roomUser.userId === lobbyUser.id),
      ),
    [sortedLobbyUsers, roomUsers],
  )

  const handleSwitchChatType = (option: T_SwitchOption) => {
    setUsersType(option.value as E_ChatType)
  }

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(emitRequestUsers())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  useEffect(() => {
    if (roomId) {
      setUsersOptions(instanceUsersOptions)
      setUsersType(instanceUsersOptions[1].value as E_ChatType)
    } else {
      setUsersOptions([instanceUsersOptions[0]])
      setUsersType(instanceUsersOptions[0].value as E_ChatType)
    }
  }, [roomId])

  return (
    <S.UsersPanel>
      <S.Title>{t('sidePanels.users.title')}</S.Title>
      <div>
        <Switch
          value={usersType}
          onChange={handleSwitchChatType}
          options={usersOptions}
          name='usersType'
        />
      </div>
      <S.ContentSection>
        <S.UsersWrapper>
          {usersType === E_ChatType.lobby
            ? sortedLobbyUsers.length
              ? sortedLobbyUsers.map((user) => (
                  <User
                    key={user.id + E_ChatType.lobby}
                    nickname={user.nickname}
                    status={user.status}
                  />
                ))
              : '...'
            : roomUsersToLobbyUsers.length
            ? roomUsersToLobbyUsers.map((user) => (
                <User
                  key={user.id + E_ChatType.lobby}
                  nickname={user.nickname}
                  status={user.status}
                />
              ))
            : '...'}
        </S.UsersWrapper>
      </S.ContentSection>
    </S.UsersPanel>
  )
}
