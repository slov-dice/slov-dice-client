import { useCallback, useState } from 'react'

import { formCreateCharacter, T_FormCreateCharacter, mockBars } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import {
  CharacterAvatar,
  CharacterLevel,
  CharacterName,
  CharacterDescription,
  CharacterBarText,
} from 'components/Character'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { I_Character } from 'models/game/character'
import * as C from 'styles/components'

export const CreateCharacterOverlay = () => {
  const { closeCharacterWindowOverlay } = useActions()
  const characterCreator = useStoreSelector((state) => state.gameCharacters.characterCreator)
  const [character, setCharacter] = useState<T_FormCreateCharacter>(formCreateCharacter)

  const handleClose = useCallback(() => {
    setCharacter(formCreateCharacter)
    closeCharacterWindowOverlay(E_WindowOverlay.createCharacter)
  }, [closeCharacterWindowOverlay])

  const handleChangeCharacterLevel = (value: number) => {
    setCharacter((prev) => ({ ...prev, level: value }))
  }

  const handleChangeCharacterName = (value: string) => {
    setCharacter((prev) => ({ ...prev, name: value }))
  }

  const handleChangeCharacterDescription = (value: string) => {
    setCharacter((prev) => ({ ...prev, description: value }))
  }

  const handleChangeCharacterBarCurrentValue = (name: string, value: number) => {
    setCharacter((prev) => ({
      ...prev,
      bars: prev.bars.map((bar) => (bar.name === name ? { ...bar, current: value } : bar)),
    }))
  }

  const handleChangeCharacterBarMaxValue = (name: string, value: number) => {
    setCharacter((prev) => ({
      ...prev,
      bars: prev.bars.map((bar) => (bar.name === name ? { ...bar, max: value } : bar)),
    }))
  }

  const handleCreateCharacter = () => {
    console.table(character)
    console.table(characterCreator)
    // const character: I_Character
  }

  const calculateBarHeight = (current: number, max: number) => {
    const result = (current * 100) / max
    if (result > 100) {
      return 100
    }
    return result
  }

  console.log('character', character)

  return (
    <div>
      <S.OverlayHeader>
        <span>Создание персонажа</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        <S.ContentTop>
          <CharacterLevel value={character.level} onChange={handleChangeCharacterLevel} />
          <CharacterAvatar characterId='characterCreator' image={characterCreator.avatar} />
        </S.ContentTop>
        <S.ContentWrapper>
          <S.ContentBlock>
            <CharacterName value={character.name} onChange={handleChangeCharacterName} />
            <CharacterDescription
              value={character.description}
              onChange={handleChangeCharacterDescription}
            />
          </S.ContentBlock>
          <S.ContentBlock>
            {character.bars.map((bar) => (
              <S.BarWrapper
                key={bar.name}
                color={bar.color}
                barHeight={calculateBarHeight(bar.current, bar.max)}
              >
                <S.BarName>{bar.name}</S.BarName>
                <S.BarText>
                  <CharacterBarText
                    name={bar.name}
                    value={bar.current}
                    onChange={handleChangeCharacterBarCurrentValue}
                  />
                  <span>/</span>
                  <CharacterBarText
                    name={bar.name}
                    value={bar.max}
                    onChange={handleChangeCharacterBarMaxValue}
                  />
                </S.BarText>
              </S.BarWrapper>
            ))}
          </S.ContentBlock>
          <S.ContentBlock>
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
        <S.ContentBottom>
          <Button onClick={handleClose} mod={Button.mod.secondary}>
            Отмена
          </Button>
          <Button onClick={handleCreateCharacter}>Создать</Button>
        </S.ContentBottom>
      </S.OverlayContent>
    </div>
  )
}
