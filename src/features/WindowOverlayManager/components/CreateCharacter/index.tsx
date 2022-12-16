import Tippy from '@tippyjs/react'
import { useCallback, useState } from 'react'
import { v4 } from 'uuid'

import { formCreateCharacter, T_FormCreateCharacter } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import EditIcon from 'assets/icons/app/edit.svg'
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
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import {
  T_BaseCharacterBar,
  T_BaseCharacterSpecial,
  T_CharacterBarId,
  T_CharacterSpecialId,
} from 'models/shared/game/character'
import { roomActions } from 'store/room'
import * as C from 'styles/components'
import { getBar, getEffect, getSpecial } from 'utils/game/effects'
import { calculateBarDimension } from 'utils/helpers/calculates'

export const CreateCharacterOverlay = () => {
  const dispatch = useStoreDispatch()

  const { characterCreator, settings } = useStoreSelector((store) => ({
    characterCreator: store.gameCharacters.characterCreator,
    settings: store.room.game.characters.settings,
  }))
  const [character, setCharacter] = useState<T_FormCreateCharacter>(formCreateCharacter)

  const handleClose = useCallback(() => {
    setCharacter(formCreateCharacter)
    dispatch(gameCharactersActions.closeCharacterWindowOverlay(E_WindowOverlay.createCharacter))
  }, [dispatch])

  const handleOpenBattlefieldActionsEditorOverlay = () => {
    dispatch(
      gameCharactersActions.openCharacterWindowOverlay({
        name: E_WindowOverlay.battlefieldActionsEditor,
        payload: 'characterCreator',
        isOpen: true,
      }),
    )
  }

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
    dispatch(gameCharactersActions.setCharacterCreatorBar({ id, value, property: 'current' }))
  }

  const handleChangeCharacterBarMaxValue = (id: T_CharacterBarId, value: number) => {
    dispatch(gameCharactersActions.setCharacterCreatorBar({ id, value, property: 'max' }))
  }

  const handleChangeCharacterSpecial = (id: T_CharacterSpecialId, value: number) => {
    dispatch(gameCharactersActions.setCharacterCreatorSpecial({ id, value }))
  }

  const handleRemoveCharacterEffect = (effectId: string) => {
    dispatch(
      gameCharactersActions.removeCharacterEffect({ characterId: 'characterCreator', effectId }),
    )
  }

  const handleCreateCharacter = () => {
    dispatch(
      roomActions.emitCreateCharacterInCharactersWindow({
        id: v4(),
        ...character,
        ...characterCreator,
      }),
    )
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
                  <S.BarName>{baseBar.name}</S.BarName>
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

          <S.ContentBlock direction='row'>
            <Tippy content={t('windowCharacters.editActions')}>
              <S.EditActions onClick={handleOpenBattlefieldActionsEditorOverlay}>
                <EditIcon />
              </S.EditActions>
            </Tippy>
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
