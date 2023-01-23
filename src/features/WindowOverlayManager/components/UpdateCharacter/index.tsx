import Tippy from '@tippyjs/react'
import { useCallback, useState } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import EditIcon from 'assets/icons/app/edit.svg'
import TrashIcon from 'assets/icons/app/trash.svg'
import { Button } from 'components/Buttons'
import {
  AddCharacterEffect,
  CharacterBarText,
  CharacterEffect,
  CharacterLevel,
  CharacterSpecial,
} from 'components/Character'
import { AvatarPicker, EditableText, EditableTextarea } from 'components/game'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_CharacterBarId, T_CharacterSpecialId } from 'models/shared/game/character'
import { roomActions } from 'store/room'
import * as C from 'styles/components'
import { getBar, getEffect, getSpecial } from 'utils/game/effects'
import { calculateBarDimension } from 'utils/helpers/calculates'

export const UpdateCharacterOverlay = () => {
  const dispatch = useStoreDispatch()
  const overlayPayload = useStoreSelector(
    (store) =>
      store.gameCharacters.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.updateCharacter,
      )?.payload,
  )

  const { characterStore, characterEditor, settings } = useStoreSelector((store) => ({
    characterStore: store.room.game.characters.window.characters.find(
      (character) => character.id === overlayPayload,
    ),
    settings: store.room.game.characters.settings,
    characterEditor: store.gameCharacters.characterEditor,
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
    dispatch(
      gameCharactersActions.removeCharacterEffect({ characterId: 'characterEditor', effectId }),
    )
  }

  const handleClose = useCallback(() => {
    dispatch(gameCharactersActions.closeCharacterWindowOverlay(E_WindowOverlay.updateCharacter))
  }, [dispatch])

  const handleOpenActionsEditorOverlay = () => {
    dispatch(
      gameCharactersActions.openCharacterWindowOverlay({
        name: E_WindowOverlay.actionsEditor,
        payload: 'characterEditor',
        isOpen: true,
      }),
    )
  }

  const handleUpdateCharacter = () => {
    dispatch(roomActions.emitUpdateCharacter({ ...character, ...characterEditor }))
    handleClose()
  }

  const handleRemoveCharacter = () => {
    dispatch(roomActions.emitRemoveCharacter({ characterId: character.id }))
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
            <Tippy content={t('updateCharacterOverlay.actions.remove')}>
              <S.RemoveCharacter onClick={handleRemoveCharacter}>
                <TrashIcon />
              </S.RemoveCharacter>
            </Tippy>
            <CharacterLevel value={character.level} onChange={handleChangeCharacterLevel} />
            <AvatarPicker characterId='characterEditor' image={characterEditor.avatar} />
          </S.ContentTop>
          <S.ContentWrapper>
            <S.ContentBlock>
              <EditableText value={character.name} onChange={handleChangeCharacterName} />
              <EditableTextarea
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
                    <S.BarName>{baseBar.name}</S.BarName>
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
            <S.ContentBlock direction='row'>
              {characterEditor.actions.map((action) => (
                <S.CharacterAction key={action.id}>
                  <div>{action.title}</div>
                  <hr />
                  <C.ParagraphPreLine>{action.description}</C.ParagraphPreLine>
                </S.CharacterAction>
              ))}
              <Tippy content={t('windowCharacters.editActions')}>
                <S.EditActions onClick={handleOpenActionsEditorOverlay}>
                  <EditIcon />
                </S.EditActions>
              </Tippy>
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
  return <>...</>
}
