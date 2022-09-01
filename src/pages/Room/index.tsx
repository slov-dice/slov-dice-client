import { useLayoutEffect } from 'react'

import { RoomInfo } from './extensions/RoomInfo'
import { closeRoomPage, openRoomPage } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'
import { useStoreDispatch } from 'hooks/useStoreDispatch'

export const Room = () => {
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(openRoomPage())

    return () => {
      dispatch(closeRoomPage())
      unsubscribe()
    }
  }, [dispatch])

  return (
    <S.Page>
      <S.Container>
        <RoomInfo />
      </S.Container>
      <HeroBackground />
    </S.Page>
  )
}
