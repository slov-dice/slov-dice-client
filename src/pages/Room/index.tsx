import { useLayoutEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'

import { closeRoomPage, openRoomPage } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'
import { TileManager } from 'features/TileManager'
import { WindowManager } from 'features/WindowManager'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

const Room = () => {
  const dispatch = useStoreDispatch()

  const pageRef = useRef<HTMLDivElement>(null)
  useStoreSelector((store) => store.room)

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
    <>
      <S.Page ref={pageRef}>
        {isMobile ? <TileManager /> : <WindowManager dragConstraintsRef={pageRef} />}
        <HeroBackground />
      </S.Page>
    </>
  )
}

export default Room
