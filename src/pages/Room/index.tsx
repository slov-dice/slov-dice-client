import { useLayoutEffect, useRef } from 'react'

import { closeRoomPage, openRoomPage } from './slice'
import { subscribe, unsubscribe } from './socket'
import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'
import { WindowManager } from 'features/WindowManager'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'

export const Room = () => {
  const dispatch = useStoreDispatch()

  const pageRef = useRef<HTMLDivElement>(null)
  const room = useStoreSelector((store) => store.room)

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
        <div
          style={{
            position: 'absolute',
            fontSize: 10,
            overflowY: 'auto',
            maxHeight: 1100,
            zIndex: 100,
            padding: 12,
          }}
        >
          <pre>{JSON.stringify(room.game, null, 2)}</pre>
        </div>
        <WindowManager dragConstraintsRef={pageRef} />
        <HeroBackground />
      </S.Page>
    </>
  )
}
