import { useLayoutEffect } from 'react'

import { RoomList } from './extensions/RoomList'
import { emitRequestPreviewRooms } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'
import { useStoreDispatch } from 'hooks/useStoreDispatch'

export const Lobby = () => {
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(emitRequestPreviewRooms())

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return (
    <S.Page>
      <S.Container>
        <RoomList />
      </S.Container>
      <HeroBackground />
    </S.Page>
  )
}
