import { useCallback } from 'react'

import { characterAvatars } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import * as C from 'styles/components'

export const PickCharacterAvatarOverlay = () => {
  const { closeCharacterWindowOverlay } = useActions()

  const handleClose = useCallback(() => {
    closeCharacterWindowOverlay(E_WindowOverlay.pickCharacterAvatar)
  }, [closeCharacterWindowOverlay])

  return (
    <div>
      <S.OverlayHeader>
        <span>Аватар персонажа</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        {characterAvatars.map((avatar, index) => (
          <S.AvatarWrapper key={index}>
            <img alt='avatar' src={avatar} />
          </S.AvatarWrapper>
        ))}
      </S.OverlayContent>
    </div>
  )
}
