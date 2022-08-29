import { useLayoutEffect } from 'react'

import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { emitRequestPreviewRooms } from 'pages/Lobby/slice'

export const Room = () => {
  const room = useStoreSelector((store) => store.room)
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
        {room.id ? <pre>{JSON.stringify(room, null, 2)}</pre> : 'Room not found'}
      </S.Container>
      <HeroBackground />
    </S.Page>
  )
}
