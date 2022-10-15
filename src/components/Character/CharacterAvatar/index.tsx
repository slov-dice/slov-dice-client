import * as S from './styles'

import PenIcon from 'assets/icons/app/pen.svg'
import PlaceholderImage from 'assets/images/placeholder.png'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'

interface I_CharacterAvatarProps {
  image?: string
  characterId?: string
}

export const CharacterAvatar = ({ image, characterId }: I_CharacterAvatarProps) => {
  const { openCharacterWindowOverlay } = useActions()

  const handleOpenPickCharacterAvatarOverlay = () => {
    openCharacterWindowOverlay({
      name: E_WindowOverlay.pickCharacterAvatar,
      isOpen: true,
      payload: characterId,
    })
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
