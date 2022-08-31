import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { RoomList } from './extensions/RoomList'
import { emitRequestPreviewRooms } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'
import { useStoreDispatch } from 'hooks/useStoreDispatch'

export const Lobby = () => {
  const dispatch = useStoreDispatch()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    dispatch(subscribe(navigate))
    dispatch(emitRequestPreviewRooms())

    return () => {
      unsubscribe()
    }
  }, [dispatch, navigate])

  return (
    <S.Page>
      <S.Container>
        <RoomList />
      </S.Container>
      <HeroBackground />
    </S.Page>
  )
}
