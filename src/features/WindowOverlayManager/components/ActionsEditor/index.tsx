import { ChangeEvent, useCallback, useContext, useMemo, useState, KeyboardEvent } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { v4 } from 'uuid'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { Button } from 'components/Buttons'
import { ActionSuggests } from 'components/game'
import {
  CustomSelectField,
  E_TextFieldSize,
  TextareaField,
  TextField,
} from 'components/InputFields'
import { T_CustomSelectOption } from 'components/InputFields/CustomSelectField/models'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_Window } from 'features/WindowManager/models'
import { windowOverlayManagerContext } from 'features/WindowOverlayManager/context'
import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_CharacterBarId } from 'models/shared/game/character'
import * as C from 'styles/components'
import { regExp } from 'utils/helpers/regExp'

const findOverlay = (overlay: I_WindowOverlay) => overlay.name === E_WindowOverlay.actionsEditor

export const ActionsEditor = () => {
  const dispatch = useStoreDispatch()
  const { location } = useContext(windowOverlayManagerContext)
  const { overlayPayload, settingsBars } = useStoreSelector((store) => ({
    overlayPayload:
      location === E_Window.characters
        ? store.gameCharacters.overlays.find(findOverlay)?.payload
        : store.gameBattlefield.overlays.find(findOverlay)?.payload,
    settingsBars: store.room.game.characters.settings.bars,
  }))

  const actions = useStoreSelector((store) => {
    if (overlayPayload === 'characterCreator') {
      return store.gameCharacters.characterCreator.actions
    }
    if (overlayPayload === 'characterEditor') {
      return store.gameCharacters.characterEditor.actions
    }
    if (overlayPayload === 'dummyCreator') {
      return store.gameBattlefield.dummyCreator.actions
    }
    if (overlayPayload === 'dummyEditor') {
      return store.gameBattlefield.dummyEditor.actions
    }
  })

  const [currentSuggestIndex, setCurrentSuggestIndex] = useState<number | null>(null)

  const { control, handleSubmit } = useForm({
    defaultValues: { actions: actions },
  })

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'actions',
    keyName: 'actionId',
  })

  const handleClose = useCallback(() => {
    if (overlayPayload?.startsWith('character')) {
      dispatch(gameCharactersActions.closeCharacterWindowOverlay(E_WindowOverlay.actionsEditor))
    }
    if (overlayPayload?.startsWith('dummy')) {
      dispatch(gameBattlefieldActions.closeBattlefieldWindowOverlay(E_WindowOverlay.actionsEditor))
    }
  }, [dispatch, overlayPayload])

  const handleAddAction = () => {
    append({
      id: v4(),
      title: '',
      description: '',
      target: { barId: '', value: '' },
    })
  }

  const handleRemoveAction = (index: number) => () => {
    remove(index)
  }

  const handleSaveActions = () => {
    if (overlayPayload && fields) {
      if (location === E_Window.characters) {
        if (overlayPayload?.startsWith('character')) {
          dispatch(
            gameCharactersActions.setCharacterActions({
              characterId: overlayPayload,
              actions: fields,
            }),
          )
        }
      }
      if (location === E_Window.battlefield) {
        if (overlayPayload?.startsWith('dummy')) {
          dispatch(
            gameBattlefieldActions.setDummyActions({
              characterId: overlayPayload,
              actions: fields,
            }),
          )
        }
      }
      handleClose()
    }
  }

  const handleChangeSelectBar = (option: T_CustomSelectOption, fieldIndex?: number) => {
    if (fieldIndex !== undefined && fieldIndex >= 0) {
      update(fieldIndex, {
        ...fields[fieldIndex],
        target: { ...fields[fieldIndex].target, barId: option.value as T_CharacterBarId },
      })
    }
  }

  const handleChangeTargetValue = (e: ChangeEvent<HTMLInputElement>, fieldIndex: number) => {
    update(fieldIndex, {
      ...fields[fieldIndex],
      target: { ...fields[fieldIndex].target, value: e.target.value },
    })
  }

  const handleTriggerSuggests = (fieldIndex: number) => {
    if (fieldIndex === null) return

    setCurrentSuggestIndex(fieldIndex)
  }

  const handleSelectSuggest = (suggest: any, fieldIndex: number) => {
    update(fieldIndex, {
      ...fields[fieldIndex],
      target: {
        ...fields[fieldIndex].target,
        value: fields[fieldIndex].target.value + suggest.value + ' ',
      },
    })
  }

  const handleKeyDownValue = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      !regExp.onlyNumber.test(e.key) &&
      e.key !== '+' &&
      e.key !== '-' &&
      e.key !== '*' &&
      e.key !== '/' &&
      e.key !== '(' &&
      e.key !== ')' &&
      !(e.ctrlKey && e.key === 'c') &&
      !(e.ctrlKey && e.key === 'v') &&
      !(e.ctrlKey && e.key === 'a') &&
      !(e.ctrlKey && e.key === 'z') &&
      e.code !== 'Backspace' &&
      e.code !== 'Delete' &&
      e.code !== 'ArrowLeft' &&
      e.code !== 'ArrowRight' &&
      e.code !== 'Space'
    ) {
      e.preventDefault()
    }
  }

  const optionsBars: T_CustomSelectOption[] = useMemo(
    () => settingsBars.map((bar) => ({ value: bar.id, label: <div>{bar.name}</div> })),
    [settingsBars],
  )

  return (
    <div>
      <S.OverlayHeader>
        <span>{t('actionsEditor.title')}</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        <S.ContentWrapper>
          {fields.map((field, index) => (
            <S.ContentBlock key={index}>
              <TextField
                value={field.title}
                size={E_TextFieldSize.xs}
                onChange={(e) => update(index, { ...field, title: e.target.value })}
                placeholder={t('actionsEditor.fields.title')}
              />
              <TextareaField
                value={field.description}
                fullWidth
                onChange={(e) => update(index, { ...field, description: e.target.value })}
                placeholder={t('actionsEditor.fields.description')}
              />
              <div>{t('actionsEditor.fields.target')}</div>
              <C.Row>
                <CustomSelectField
                  fieldIndex={index}
                  value={field.target.barId}
                  onChange={handleChangeSelectBar}
                  options={optionsBars}
                />
              </C.Row>
              <C.Row>
                <S.AutocompleteWrapper>
                  <TextField
                    value={field.target.value}
                    onChange={(e) => handleChangeTargetValue(e, index)}
                    onFocus={() => handleTriggerSuggests(index)}
                    onKeyDown={handleKeyDownValue}
                    fullWidth
                    size={E_TextFieldSize.xs}
                    placeholder={t('actionsEditor.fields.value')}
                  />
                  {currentSuggestIndex === index && (
                    <ActionSuggests
                      onClose={() => setCurrentSuggestIndex(null)}
                      onSelect={(suggest) => handleSelectSuggest(suggest, index)}
                    />
                  )}
                </S.AutocompleteWrapper>
              </C.Row>
              <S.BlockRemove onClick={handleRemoveAction(index)}>
                <CloseIcon />
              </S.BlockRemove>
            </S.ContentBlock>
          ))}

          <S.BlockAdd onClick={handleAddAction}>
            <div>{t('actionsEditor.actions.add')}</div>
            <PlusIcon />
          </S.BlockAdd>
        </S.ContentWrapper>
        <C.Divider decorated />
        <S.ContentBottom>
          <Button onClick={handleClose} mod={Button.mod.secondary}>
            {t('actionsEditor.actions.cancel')}
          </Button>
          <Button onClick={handleSubmit(handleSaveActions)}>
            {t('actionsEditor.actions.save')}
          </Button>
        </S.ContentBottom>
      </S.OverlayContent>
    </div>
  )
}
