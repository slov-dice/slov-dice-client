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

interface I_AvatarPickerProps {
  image?: string
  characterId?: string
}

export const AvatarPicker = ({ image, characterId }: I_AvatarPickerProps) => {
  const { location } = useContext(windowOverlayManagerContext)
  const dispatch = useStoreDispatch()

  const handleOpenPickAvatarOverlay = () => {
    if (location === E_Window.characters) {
      dispatch(
        gameCharactersActions.openWindowOverlay({
          name: E_WindowOverlay.pickCharacterAvatar,
          payload: characterId,
        }),
      )
    }
    if (location === E_Window.battlefield) {
      dispatch(
        gameBattlefieldActions.openWindowOverlay({
          name: E_WindowOverlay.pickDummyAvatar,
          payload: characterId,
        }),
      )
    }
  }

  return (
    <S.AvatarWrapper onClick={handleOpenPickAvatarOverlay}>
      <S.AvatarImage src={image || PlaceholderImage} alt='avatar' />
      <S.EditAvatar>
        <S.EditAvatarIcon>
          <PenIcon />
        </S.EditAvatarIcon>
      </S.EditAvatar>
    </S.AvatarWrapper>
  )
}
