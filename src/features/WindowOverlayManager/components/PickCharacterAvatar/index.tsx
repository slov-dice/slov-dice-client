import { useCallback } from 'react'

import { characterAvatars } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'

export const PickCharacterAvatarOverlay = () => {
  const { closeCharacterWindowOverlay, setCharacterAvatar } = useActions()

  const overlayPayload = useStoreSelector(
    (state) =>
      state.gameCharacters.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.pickCharacterAvatar,
      )?.payload,
  )

  const characterAvatar = useStoreSelector((state) => {
    if (overlayPayload === 'characterCreator') {
      return state.gameCharacters.characterCreator.avatar
    }
    if (overlayPayload === 'characterEditor') {
      return state.gameCharacters.characterEditor.avatar
    }
    return state.gameCharacters.characters.find((character) => character.id === overlayPayload)
      ?.avatar
  })

  const handleClose = useCallback(() => {
    closeCharacterWindowOverlay(E_WindowOverlay.pickCharacterAvatar)
  }, [closeCharacterWindowOverlay])

  const handlePickAvatar = (avatar: string) => () => {
    if (overlayPayload) {
      setCharacterAvatar({ characterId: overlayPayload, avatar })
    }
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>Аватар персонажа</span>
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
