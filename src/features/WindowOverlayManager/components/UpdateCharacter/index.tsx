import { useCallback } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { CharacterAvatar } from 'components/Character'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import * as C from 'styles/components'

export const UpdateCharacterOverlay = () => {
  const { closeCharacterWindowOverlay } = useActions()

  const handleClose = useCallback(() => {
    closeCharacterWindowOverlay(E_WindowOverlay.updateCharacter)
  }, [closeCharacterWindowOverlay])

  return (
    <div>
      <S.OverlayHeader>
        <span>Редактирование персонажа</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        <CharacterAvatar />
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
