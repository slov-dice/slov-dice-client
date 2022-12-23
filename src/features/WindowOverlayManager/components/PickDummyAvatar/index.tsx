import { useCallback } from 'react'

import { dummiesAvatars } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const PickDummyAvatarOverlay = () => {
  const dispatch = useStoreDispatch()

  const overlayPayload = useStoreSelector(
    (state) =>
      state.gameBattlefield.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.pickDummyAvatar,
      )?.payload,
  )

  const dummyAvatar = useStoreSelector((store) => {
    if (overlayPayload === 'dummyCreator') {
      return store.gameBattlefield.dummyCreator.avatar
    }
    if (overlayPayload === 'dummyEditor') {
      return store.gameBattlefield.dummyEditor.avatar
    }
  })

  const handleClose = useCallback(() => {
    dispatch(gameBattlefieldActions.closeBattlefieldWindowOverlay(E_WindowOverlay.pickDummyAvatar))
  }, [dispatch])

  const handlePickAvatar = (avatar: string) => () => {
    if (overlayPayload) {
      if (overlayPayload === 'dummyCreator' || overlayPayload === 'dummyEditor') {
        dispatch(gameBattlefieldActions.setDummyAvatar({ characterId: overlayPayload, avatar }))
        return
      }
    }
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>Аватар болванки</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        {dummiesAvatars.map((avatar, index) => {
          const isSelected = dummyAvatar === avatar
          return (
            <S.AvatarWrapper
              key={index}
              isSelected={isSelected}
              onClick={!isSelected ? handlePickAvatar(avatar) : undefined}
            >
              <img alt='avatar' src={avatar} />
            </S.AvatarWrapper>
          )
        })}
      </S.OverlayContent>
    </div>
  )
}
