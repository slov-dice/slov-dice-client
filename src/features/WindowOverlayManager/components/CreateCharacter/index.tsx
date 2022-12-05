import { useCallback, useState } from 'react'
import { v4 } from 'uuid'

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
import { t } from 'languages'
import {
  T_BaseCharacterBar,
  T_BaseCharacterSpecial,
  T_CharacterBarId,
  T_CharacterSpecialId,
} from 'models/shared/game/character'
import * as C from 'styles/components'
import { getBar, getEffect, getSpecial } from 'utils/game/effects'
import { calculateBarDimension } from 'utils/helpers/calculates'

export const CreateCharacterOverlay = () => {
  const {
    closeCharacterWindowOverlay,
    removeCharacterEffect,
    setCharacterCreatorBar,
    setCharacterCreatorSpecial,
    emitCreateCharacterInCharactersWindow,
  } = useActions()
  const { characterCreator, settings, language } = useStoreSelector((store) => ({
    characterCreator: store.gameCharacters.characterCreator,
    settings: store.room.game.characters.settings,
    language: store.app.language,
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

  const handleChangeCharacterBarCurrentValue = (id: T_CharacterBarId, value: number) => {
    setCharacterCreatorBar({ id, value, property: 'current' })
  }

  const handleChangeCharacterBarMaxValue = (id: T_CharacterBarId, value: number) => {
    setCharacterCreatorBar({ id, value, property: 'max' })
  }

  const handleChangeCharacterSpecial = (id: T_CharacterSpecialId, value: number) => {
    setCharacterCreatorSpecial({ id, value })
  }

  const handleRemoveCharacterEffect = (effectId: string) => {
    removeCharacterEffect({ characterId: 'characterCreator', effectId })
  }

  const handleCreateCharacter = () => {
    emitCreateCharacterInCharactersWindow({ id: v4(), ...character, ...characterCreator })
    handleClose()
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>{t('createCharacterOverlay.title')}</span>
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
            {characterCreator.bars.map((bar) => {
              const baseBar: T_BaseCharacterBar = getBar(bar.id, settings.bars)
              return (
                <S.BarWrapper
                  key={bar.id}
                  color={baseBar.color}
                  barHeight={calculateBarDimension(bar.current, bar.max)}
                >
                  <S.BarName>{baseBar.name[language]}</S.BarName>
                  <S.BarText>
                    <CharacterBarText
                      id={bar.id}
                      value={bar.current}
                      onChange={handleChangeCharacterBarCurrentValue}
                    />
                    <span>/</span>
                    <CharacterBarText
                      id={bar.id}
                      value={bar.max}
                      onChange={handleChangeCharacterBarMaxValue}
                    />
                  </S.BarText>
                </S.BarWrapper>
              )
            })}
          </S.ContentBlock>
          <S.ContentBlock>
            {characterCreator.specials.map((special) => {
              const baseSpecial: T_BaseCharacterSpecial = getSpecial(special.id, settings.specials)
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
            {characterCreator.effects.map((effectId) => {
              const effect = getEffect(effectId, settings.effects)
              return (
                <CharacterEffect
                  key={effect.id}
                  effect={effect}
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
            {t('createCharacterOverlay.actions.cancel')}
          </Button>
          <Button onClick={handleCreateCharacter}>
            {t('createCharacterOverlay.actions.create')}
          </Button>
        </S.ContentBottom>
      </S.OverlayContent>
    </div>
  )
}
