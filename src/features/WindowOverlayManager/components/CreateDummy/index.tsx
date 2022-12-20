import Tippy from '@tippyjs/react'
import { useCallback, useState } from 'react'
import { v4 } from 'uuid'

import { formCreateDummy, T_FormCreateDummy } from './data'
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
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_BaseCharacterBar, T_CharacterBarId } from 'models/shared/game/character'
import * as C from 'styles/components'
import { getBar } from 'utils/game/effects'
import { calculateBarDimension } from 'utils/helpers/calculates'

export const CreateDummyOverlay = () => {
  const dispatch = useStoreDispatch()

  const { characterCreator, settings } = useStoreSelector((store) => ({
    characterCreator: store.gameCharacters.characterCreator,
    settings: store.room.game.characters.settings,
  }))
  const [character, setCharacter] = useState<T_FormCreateDummy>(formCreateDummy)

  const handleOpenBattlefieldActionsEditorOverlay = () => {
    dispatch(
      gameBattlefieldActions.openBattlefieldWindowOverlay({
        name: E_WindowOverlay.battlefieldActionsEditor,
        payload: 'battlefieldEditor',
        isOpen: true,
      }),
    )
  }

  const handleClose = useCallback(() => {
    setCharacter(formCreateDummy)
    dispatch(gameBattlefieldActions.closeBattlefieldWindowOverlay(E_WindowOverlay.createDummy))
  }, [dispatch])

  const handleChangeCharacterName = (value: string) => {
    setCharacter((prev) => ({ ...prev, name: value }))
  }

  const handleChangeCharacterBarCurrentValue = (id: T_CharacterBarId, value: number) => {
    // dispatch(gameCharactersActions.setCharacterCreatorBar({ id, value, property: 'current' }))
  }

  const handleChangeCharacterBarMaxValue = (id: T_CharacterBarId, value: number) => {
    // dispatch(gameCharactersActions.setCharacterCreatorBar({ id, value, property: 'max' }))
  }

  const handleCreateCharacter = () => {
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
          <CharacterAvatar characterId='characterCreator' image={characterCreator.avatar} />
        </S.ContentTop>
        <S.ContentWrapper>
          <S.ContentBlock>
            <CharacterName value={character.name} onChange={handleChangeCharacterName} />
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
          <S.ContentBlock direction='row'>
            {characterCreator.actions.map((action) => (
              <S.CharacterAction key={action.id}>
                <div>{action.title}</div>
                <hr />
                <C.ParagraphPreLine>{action.description}</C.ParagraphPreLine>
              </S.CharacterAction>
            ))}
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
