import { useCallback } from 'react'

import { dummiesAvatars } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_Battlefield } from 'models/shared/game/battlefield'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const PickDummyAvatarOverlay = () => {
  const dispatch = useStoreDispatch()

  const overlayPayload = useStoreSelector(
    (state) =>
      state.gameBattlefield.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.pickDummyAvatar,
      )?.payload,
  )

  const { dummyAvatar, battlefield } = useStoreSelector((store) => {
    if (overlayPayload === 'dummyCreator') {
      return {
        dummyAvatar: store.gameBattlefield.dummyCreator.avatar,
        battlefield: E_Battlefield.master,
      }
    }
    if (overlayPayload === 'dummyEditor') {
      return {
        dummyAvatar: store.gameBattlefield.dummyEditor.avatar,
        battlefield: E_Battlefield.master,
      }
    }
    const masterDummyAvatar = store.room.game.battlefield.window.masterDummies.find(
      (dummy) => dummy.id === overlayPayload,
    )?.avatar
    return {
      dummyAvatar:
        masterDummyAvatar ||
        store.room.game.battlefield.window.playersDummies.find(
          (dummy) => dummy.id === overlayPayload,
        )?.avatar,
      field: masterDummyAvatar ? E_Battlefield.master : E_Battlefield.players,
    }
  })

  const handleClose = useCallback(() => {
    dispatch(gameBattlefieldActions.closeBattlefieldWindowOverlay(E_WindowOverlay.pickDummyAvatar))
  }, [dispatch])

  const handlePickAvatar = (avatar: string) => () => {
    if (overlayPayload && battlefield) {
      handleClose()
      if (overlayPayload === 'dummyCreator' || overlayPayload === 'dummyEditor') {
        dispatch(gameBattlefieldActions.setDummyAvatar({ characterId: overlayPayload, avatar }))
        return
      }
      dispatch(
        roomActions.emitUpdateDummyField({
          dummyId: overlayPayload,
          field: 'avatar',
          value: avatar,
          battlefield,
        }),
      )
    }
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>{t('pickDummyAvatarOverlay.title')}</span>
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
