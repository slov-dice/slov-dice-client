import { useLayoutEffect } from 'react'

import { emitRequestUsers, subscribe, unsubscribe } from './slice'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const UsersPanel = () => {
  const dispatch = useStoreDispatch()

  const users = useStoreSelector((state) => state.usersPanel.users)

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(emitRequestUsers())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return (
    <S.UsersPanel>
      <span>Users</span>
      <pre style={{ overflow: 'auto', height: 800 }}>
        {users.length ? JSON.stringify(users, undefined, 2) : '...'}
      </pre>
    </S.UsersPanel>
  )
}
