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
import { t } from 'languages'
import { T_CharacterBarId, T_CharacterSpecialId } from 'models/shared/game/character'
import * as C from 'styles/components'
import { getBar, getEffect, getSpecial } from 'utils/game/effects'
import { calculateBarDimension } from 'utils/helpers/calculates'

export const UpdateCharacterOverlay = () => {
  const {
    closeCharacterWindowOverlay,
    removeCharacterEffect,
    emitUpdateCharacterInCharactersWindow,
  } = useActions()

  const payload = useStoreSelector(
    (state) =>
      state.gameCharacters.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.updateCharacter,
      )?.payload,
  )

  const { characterStore, characterEditor, settings, language } = useStoreSelector((store) => ({
    characterStore: store.room.game.characters.window.characters.find(
      (character) => character.id === payload,
    ),
    settings: store.room.game.characters.settings,
    characterEditor: store.gameCharacters.characterEditor,
    language: store.app.language,
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

  const handleChangeCharacterBarCurrentValue = (id: T_CharacterBarId, value: number) => {
    setCharacter((prev) => ({
      ...prev,
      bars: prev.bars.map((bar) => (bar.id === id ? { ...bar, current: value } : bar)),
    }))
  }

  const handleChangeCharacterBarMaxValue = (id: T_CharacterBarId, value: number) => {
    setCharacter((prev) => ({
      ...prev,
      bars: prev.bars.map((bar) => (bar.id === id ? { ...bar, max: value } : bar)),
    }))
  }

  const handleChangeCharacterSpecial = (id: T_CharacterSpecialId, value: number) => {
    setCharacter((prev) => ({
      ...prev,
      specials: prev.specials.map((special) =>
        special.id === id ? { ...special, current: value } : special,
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
    emitUpdateCharacterInCharactersWindow({ ...character, ...characterEditor })
    handleClose()
  }

  if (character) {
    return (
      <div>
        <S.OverlayHeader>
          <span>{t('updateCharacterOverlay.title')}</span>
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
              {character.bars.map((bar) => {
                const baseBar = getBar(bar.id, settings.bars)
                return (
                  <S.BarWrapper
                    key={bar.id}
                    color={baseBar.color}
                    barHeight={calculateBarDimension(bar.current, bar.max)}
                  >
                    <S.BarName>{baseBar.name[language]}</S.BarName>
                    <S.BarText>
                      <CharacterBarText
                        id={baseBar.id}
                        value={bar.current}
                        onChange={handleChangeCharacterBarCurrentValue}
                      />
                      <span>/</span>
                      <CharacterBarText
                        id={baseBar.id}
                        value={bar.max}
                        onChange={handleChangeCharacterBarMaxValue}
                      />
                    </S.BarText>
                  </S.BarWrapper>
                )
              })}
            </S.ContentBlock>

            <S.ContentBlock>
              {character.specials.map((special) => {
                const baseSpecial = getSpecial(special.id, settings.specials)
                return (
                  <CharacterSpecial
                    key={special.id}
                    special={{ ...special, ...baseSpecial }}
                    onChange={handleChangeCharacterSpecial}
                  />
                )
              })}
            </S.ContentBlock>

            <S.ContentBlock direction='row'>
              {characterEditor.effects.map((effectId) => {
                const effect = getEffect(effectId, settings.effects)
                return (
                  <CharacterEffect
                    key={effect.id}
                    effect={effect}
                    onRemove={handleRemoveCharacterEffect}
                  />
                )
              })}
              <AddCharacterEffect characterId='characterEditor' />
            </S.ContentBlock>
          </S.ContentWrapper>
          <C.Divider decorated />
          <S.ContentBottom>
            <Button onClick={handleClose} mod={Button.mod.secondary}>
              {t('updateCharacterOverlay.actions.cancel')}
            </Button>
            <Button onClick={handleUpdateCharacter}>
              {t('updateCharacterOverlay.actions.save')}
            </Button>
          </S.ContentBottom>
        </S.OverlayContent>
      </div>
    )
  }
  return '...'
}
