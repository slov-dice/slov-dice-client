import { useCallback } from 'react'

import { characterAvatars } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const PickCharacterAvatarOverlay = () => {
  const dispatch = useStoreDispatch()

  const overlayPayload = useStoreSelector(
    (state) =>
      state.gameCharacters.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.pickCharacterAvatar,
      )?.payload,
  )

  const characterAvatar = useStoreSelector((store) => {
    if (overlayPayload === 'characterCreator') {
      return store.gameCharacters.characterCreator.avatar
    }
    if (overlayPayload === 'characterEditor') {
      return store.gameCharacters.characterEditor.avatar
    }
    return store.room.game.characters.window.characters.find(
      (character) => character.id === overlayPayload,
    )?.avatar
  })

  const handleClose = useCallback(() => {
    dispatch(gameCharactersActions.closeCharacterWindowOverlay(E_WindowOverlay.pickCharacterAvatar))
  }, [dispatch])

  const handlePickAvatar = (avatar: string) => () => {
    if (overlayPayload) {
      handleClose()

      if (overlayPayload === 'characterCreator' || overlayPayload === 'characterEditor') {
        dispatch(gameCharactersActions.setCharacterAvatar({ characterId: overlayPayload, avatar }))
        return
      }
      dispatch(
        roomActions.emitUpdateCharacterField({
          characterId: overlayPayload,
          field: 'avatar',
          value: avatar,
        }),
      )
    }
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>{t('pickCharacterAvatarOverlay.title')}</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        {characterAvatars.map((avatar, index) => {
          const isSelected = characterAvatar === avatar
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
