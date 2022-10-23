import { useCallback, useState } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import {
  AddCharacterEffect,
  CharacterAvatar,
  CharacterBarText,
  CharacterDescription,
  CharacterEffect,
  CharacterLevel,
  CharacterName,
  CharacterSpecial,
} from 'components/Character'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'
import { getEffect } from 'utils/game/effects'
import { calculateBarDimension } from 'utils/helpers/calculates'

export const UpdateCharacterOverlay = () => {
  const { closeCharacterWindowOverlay, removeCharacterEffect, updateCharacter } = useActions()

  const payload = useStoreSelector(
    (state) =>
      state.gameCharacters.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.updateCharacter,
      )?.payload,
  )

  const { characterStore, characterEditor, settingsEffects } = useStoreSelector((state) => ({
    characterStore: state.gameCharacters.characters.find((character) => character.id === payload),
    characterEditor: state.gameCharacters.characterEditor,
    settingsEffects: state.gameCharacters.settings.effects,
  }))

  const [character, setCharacter] = useState(characterStore!)

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

  const handleChangeCharacterSpecial = (name: string, value: number) => {
    setCharacter((prev) => ({
      ...prev,
      specials: prev.specials.map((special) =>
        special.name === name ? { ...special, current: value } : special,
      ),
    }))
  }

  const handleRemoveCharacterEffect = (effectId: string) => {
    removeCharacterEffect({ characterId: 'characterEditor', effectId })
  }

  const handleClose = useCallback(() => {
    closeCharacterWindowOverlay(E_WindowOverlay.updateCharacter)
  }, [closeCharacterWindowOverlay])

  const handleUpdateCharacter = () => {
    updateCharacter({ ...character, ...characterEditor })
    handleClose()
  }

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
              {character.specials.map((special) => (
                <CharacterSpecial
                  key={special.name}
                  values={special}
                  onChange={handleChangeCharacterSpecial}
                />
              ))}
            </S.ContentBlock>

            <S.ContentBlock direction='row'>
              {characterEditor.effects.map((effectId) => {
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
            <Button onClick={handleUpdateCharacter}>Изменить</Button>
          </S.ContentBottom>
        </S.OverlayContent>
      </div>
    )
  }
  return '...'
}
