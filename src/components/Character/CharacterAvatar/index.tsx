import { useContext } from 'react'

import * as S from './styles'

import PenIcon from 'assets/icons/app/pen.svg'
import PlaceholderImage from 'assets/images/placeholder.png'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_Window } from 'features/WindowManager/models'
import { windowOverlayManagerContext } from 'features/WindowOverlayManager/context'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'

interface I_CharacterAvatarProps {
  image?: string
  characterId?: string
}

export const CharacterAvatar = ({ image, characterId }: I_CharacterAvatarProps) => {
  const { location } = useContext(windowOverlayManagerContext)
  const dispatch = useStoreDispatch()

  const handleOpenPickCharacterAvatarOverlay = () => {
    if (location === E_Window.characters) {
      dispatch(
        gameCharactersActions.openCharacterWindowOverlay({
          name: E_WindowOverlay.pickCharacterAvatar,
          isOpen: true,
          payload: characterId,
        }),
      )
    }
    if (location === E_Window.battlefield) {
      dispatch(
        gameBattlefieldActions.openBattlefieldWindowOverlay({
          name: E_WindowOverlay.pickDummyAvatar,
          isOpen: true,
          payload: characterId,
        }),
      )
    }
  }

  return (
    <S.AvatarWrapper onClick={handleOpenPickCharacterAvatarOverlay}>
      <S.AvatarImage src={image || PlaceholderImage} alt='avatar' />
      <S.EditAvatar>
        <S.EditAvatarIcon>
          <PenIcon />
        </S.EditAvatarIcon>
      </S.EditAvatar>
    </S.AvatarWrapper>
  )
}
