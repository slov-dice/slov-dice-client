import { useCallback, useState } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { CharacterAvatar, CharacterLevel } from 'components/Character'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { I_Character } from 'models/game/character'
import * as C from 'styles/components'

export const CreateCharacterOverlay = () => {
  const { closeCharacterWindowOverlay, openCharacterWindowOverlay } = useActions()

  const [character, setCharacter] = useState<I_Character>({
    id: '',
    name: 'Имя',
    avatar: '',
    description: 'Описание',
    level: 1,
    bars: [],
    effects: [],
    specials: [],
  })

  const handleClose = useCallback(() => {
    closeCharacterWindowOverlay(E_WindowOverlay.createCharacter)
  }, [closeCharacterWindowOverlay])

  const handleOpenAvatarCharacterOverlay = () => {
    openCharacterWindowOverlay(E_WindowOverlay.pickCharacterAvatar)
  }

  const handleChangeCharacterLevel = (value: number) => {
    setCharacter((prev) => ({ ...prev, level: value }))
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>Создание персонажа</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        <CharacterLevel value={character.level} onChange={handleChangeCharacterLevel} />
        <CharacterAvatar />
        <div onClick={handleOpenAvatarCharacterOverlay}>Аватарка</div>
        <div>Имя персонажа</div>
        <div>Описание</div>
        <div>Бар здоровья</div>
        <div>Бар выносливости</div>
        <div>Бар маны</div>
        <div>Характеристики:</div>
        <div>Интеллект</div>
        <div>Сила</div>
        <div>Ловкость</div>
        <div>Харизма</div>
        <div>Эффекты:</div>
        <div>Эффект1</div>
        <div>Эффект2</div>
        <div>Эффект+</div>
      </S.OverlayContent>
    </div>
  )
}
