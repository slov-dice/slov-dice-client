import { useLayoutEffect } from 'react'

import { closeRoomPage, openRoomPage } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'
import { WindowManager } from 'features/WindowManager'
import { useStoreDispatch } from 'hooks/useStoreDispatch'

export const Room = () => {
  const dispatch = useStoreDispatch()

  useLayoutEffect(() => {
    dispatch(subscribe())
    dispatch(openRoomPage())

    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.overflowY = 'auto'
      dispatch(closeRoomPage())
      unsubscribe()
    }
  }, [dispatch])

  return (
    <S.Page>
      <WindowManager />
      <HeroBackground />
    </S.Page>
  )
}
