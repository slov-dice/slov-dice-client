import { useCallback } from 'react'

import { characterAvatars } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const PickDummyAvatarOverlay = () => {
  const {
    closeCharacterWindowOverlay,
    setCharacterAvatar,
    emitUpdateCharacterFieldInCharactersWindow,
  } = useActions()

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
    closeCharacterWindowOverlay(E_WindowOverlay.pickCharacterAvatar)
  }, [closeCharacterWindowOverlay])

  const handlePickAvatar = (avatar: string) => () => {
    if (overlayPayload) {
      if (overlayPayload === 'characterCreator' || overlayPayload === 'characterEditor') {
        setCharacterAvatar({ characterId: overlayPayload, avatar })
        return
      }
      emitUpdateCharacterFieldInCharactersWindow({
        characterId: overlayPayload,
        field: 'avatar',
        value: avatar,
      })
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
