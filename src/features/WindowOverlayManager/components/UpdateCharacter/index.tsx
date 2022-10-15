import { useCallback } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { CharacterAvatar } from 'components/Character'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'

export const UpdateCharacterOverlay = () => {
  const { closeCharacterWindowOverlay } = useActions()

  const payload = useStoreSelector(
    (state) =>
      state.gameCharacters.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.updateCharacter,
      )?.payload,
  )

  const character = useStoreSelector((state) =>
    state.gameCharacters.characters.find((character) => character.id === payload),
  )

  const handleClose = useCallback(() => {
    closeCharacterWindowOverlay(E_WindowOverlay.updateCharacter)
  }, [closeCharacterWindowOverlay])

  if (character) {
    return (
      <div>
        <S.OverlayHeader>
          <span>Редактирование персонажа</span>
          <C.Control onClick={handleClose}>
            <CloseIcon />
          </C.Control>
        </S.OverlayHeader>
        <S.OverlayContent>
          <CharacterAvatar image={character.avatar} characterId={character.id} />
          <div>{character.name}</div>
          <div>{character.description}</div>
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
  return '...'
}
