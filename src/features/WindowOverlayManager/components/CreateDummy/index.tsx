import Tippy from '@tippyjs/react'
import { useCallback, useState } from 'react'
import { v4 } from 'uuid'

import { getFormCreateDummy, T_FormCreateDummy } from './data'
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

  const { settingsBars, dummyCreator } = useStoreSelector((store) => ({
    settingsBars: store.room.game.characters.settings.bars,
    dummyCreator: store.gameBattlefield.dummyCreator,
  }))
  const [dummy, setDummy] = useState<T_FormCreateDummy>(getFormCreateDummy(settingsBars))

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
    setDummy(getFormCreateDummy(settingsBars))
    dispatch(gameBattlefieldActions.closeBattlefieldWindowOverlay(E_WindowOverlay.createDummy))
  }, [dispatch, settingsBars])

  const handleChangeCharacterName = (value: string) => {
    setDummy((prev) => ({ ...prev, name: value }))
  }

  const handleChangeCharacterDescription = (value: string) => {
    setDummy((prev) => ({ ...prev, description: value }))
  }

  const handleChangeCharacterBarMaxValue = (id: T_CharacterBarId, value: number) => {
    setDummy((prev) => ({
      ...prev,
      bars: prev.bars.map((bar) => (bar.id === id ? { ...bar, max: value } : bar)),
    }))
  }

  const handleCheckBarInclude = (id: T_CharacterBarId, value: boolean) => {
    setDummy((prev) => ({
      ...prev,
      bars: prev.bars.map((bar) => (bar.id === id ? { ...bar, include: value } : bar)),
    }))
  }

  const handleCreateCharacter = () => {
    handleClose()
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>Создание болванки</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        <S.ContentTop>
          <CharacterAvatar characterId='characterCreator' image={dummyCreator.avatar} />
        </S.ContentTop>
        <S.ContentWrapper>
          <S.ContentBlock>
            <CharacterName value={dummy.name} onChange={handleChangeCharacterName} />
            <CharacterDescription
              value={dummy.description}
              onChange={handleChangeCharacterDescription}
            />
          </S.ContentBlock>
          <S.ContentBlock>
            {dummy.bars.map((bar) => {
              const baseBar: T_BaseCharacterBar = getBar(bar.id, settingsBars)
              return (
                <S.BarWrapper key={bar.id} color={baseBar.color} barHeight={100}>
                  <S.BarName>Макс. {baseBar.name}</S.BarName>
                  <S.BarText>
                    <CharacterBarText
                      id={bar.id}
                      value={bar.max}
                      onChange={handleChangeCharacterBarMaxValue}
                    />
                  </S.BarText>
                  <input
                    type='checkbox'
                    checked={bar.include}
                    onChange={(e) => handleCheckBarInclude(bar.id, e.target.checked)}
                  />
                </S.BarWrapper>
              )
            })}
          </S.ContentBlock>
          <S.ContentBlock direction='row'>
            {dummyCreator.actions.map((action) => (
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
