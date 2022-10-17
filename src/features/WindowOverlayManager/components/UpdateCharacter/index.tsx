import { useCallback, useState } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import { CharacterAvatar, CharacterLevel } from 'components/Character'
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

  const { characterStore, characterEditor } = useStoreSelector((state) => ({
    characterStore: state.gameCharacters.characters.find((character) => character.id === payload),
    characterEditor: state.gameCharacters.characterEditor,
  }))

  const [character, setCharacter] = useState(characterStore!)

  const handleChangeCharacterLevel = (value: number) => {
    setCharacter((prev) => ({ ...prev, level: value }))
  }

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
          <S.ContentTop>
            <CharacterLevel value={character.level} onChange={handleChangeCharacterLevel} />
            <CharacterAvatar characterId='characterEditor' image={characterEditor.avatar} />
          </S.ContentTop>
          <S.ContentWrapper>
            <S.ContentBlock>
              <div>{character.name}</div>
              <div>{character.description}</div>
            </S.ContentBlock>

            <S.ContentBlock>
              <div>Бар здоровья</div>
              <div>Бар выносливости</div>
              <div>Бар маны</div>
            </S.ContentBlock>

            <S.ContentBlock>
              <div>Характеристики:</div>
              <div>Интеллект</div>
              <div>Сила</div>
              <div>Ловкость</div>
              <div>Харизма</div>
            </S.ContentBlock>

            <S.ContentBlock>
              <div>Эффекты:</div>
              <div>Эффект1</div>
              <div>Эффект2</div>
              <div>Эффект+</div>
            </S.ContentBlock>
          </S.ContentWrapper>
          <C.Divider decorated />
          <S.ContentBottom>
            <Button onClick={handleClose} mod={Button.mod.secondary}>
              Отмена
            </Button>
            <Button>Изменить</Button>
          </S.ContentBottom>
        </S.OverlayContent>
      </div>
    )
  }
  return '...'
}
