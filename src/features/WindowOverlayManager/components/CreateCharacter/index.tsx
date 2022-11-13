import { useCallback, useState } from 'react'

import { formCreateCharacter, T_FormCreateCharacter } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import {
  CharacterAvatar,
  CharacterLevel,
  CharacterName,
  CharacterDescription,
  CharacterBarText,
  CharacterSpecial,
  CharacterEffect,
  AddCharacterEffect,
} from 'components/Character'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'
import { getEffect } from 'utils/game/effects'
import { calculateBarDimension } from 'utils/helpers/calculates'

export const CreateCharacterOverlay = () => {
  const {
    closeCharacterWindowOverlay,
    removeCharacterEffect,
    createCharacter,
    setCharacterCreatorBar,
    setCharacterCreatorSpecial,
  } = useActions()
  const { characterCreator, settingsEffects } = useStoreSelector((store) => ({
    characterCreator: store.gameCharacters.characterCreator,
    settingsEffects: store.gameCharacters.settings.effects,
  }))
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
    setCharacterCreatorBar({ name, value, property: 'current' })
  }

  const handleChangeCharacterBarMaxValue = (name: string, value: number) => {
    setCharacterCreatorBar({ name, value, property: 'max' })
  }

  const handleChangeCharacterSpecial = (name: string, value: number) => {
    setCharacterCreatorSpecial({ name, value })
  }

  const handleRemoveCharacterEffect = (effectId: string) => {
    removeCharacterEffect({ characterId: 'characterCreator', effectId })
  }

  const handleCreateCharacter = () => {
    createCharacter({ ...character, ...characterCreator })
    handleClose()
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
            {characterCreator.bars.map((bar) => (
              <S.BarWrapper
                key={bar.name}
                color={bar.color}
                barHeight={calculateBarDimension(bar.current, bar.max)}
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
            {characterCreator.specials.map((special) => (
              <CharacterSpecial
                key={special.name}
                values={special}
                onChange={handleChangeCharacterSpecial}
              />
            ))}
          </S.ContentBlock>
          <S.ContentBlock direction='row'>
            {characterCreator.effects.map((effectId) => {
              const effect = getEffect(effectId, settingsEffects)
              return (
                <CharacterEffect
                  key={effect.name}
                  values={effect}
                  onRemove={handleRemoveCharacterEffect}
                />
              )
            })}
            <AddCharacterEffect characterId='characterCreator' />
          </S.ContentBlock>
        </S.ContentWrapper>
        <C.Divider decorated />
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
