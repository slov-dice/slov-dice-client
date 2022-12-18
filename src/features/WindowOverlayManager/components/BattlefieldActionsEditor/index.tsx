import { useCallback, useMemo } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { v4 } from 'uuid'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { Button } from 'components/Buttons'
import { CustomSelectField, TextareaField, TextField } from 'components/InputFields'
import { T_CustomSelectOption } from 'components/InputFields/CustomSelectField/models'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_CharacterBarId } from 'models/shared/game/character'
import * as C from 'styles/components'

export const BattlefieldActionsEditor = () => {
  const dispatch = useStoreDispatch()

  const { overlayPayload, settingsBars } = useStoreSelector((store) => ({
    overlayPayload: store.gameCharacters.overlays.find(
      (overlay) => overlay.name === E_WindowOverlay.battlefieldActionsEditor,
    )?.payload,
    settingsBars: store.room.game.characters.settings.bars,
  }))

  const actions = useStoreSelector((store) => {
    if (overlayPayload === 'characterCreator') {
      return store.gameCharacters.characterCreator.actions
    }
    if (overlayPayload === 'characterEditor') {
      return store.gameCharacters.characterEditor.actions
    }
  })

  const { control, register, handleSubmit } = useForm({
    defaultValues: { actions: actions },
  })

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'actions',
    keyName: 'actionId',
  })

  const handleClose = useCallback(() => {
    console.log('overlayPayload', overlayPayload)
    if (overlayPayload?.startsWith('character')) {
      dispatch(
        gameCharactersActions.closeCharacterWindowOverlay(E_WindowOverlay.battlefieldActionsEditor),
      )
    }
    if (overlayPayload?.startsWith('battlefield')) {
      dispatch(
        gameBattlefieldActions.closeBattlefieldWindowOverlay(
          E_WindowOverlay.battlefieldActionsEditor,
        ),
      )
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
      dispatch(
        gameCharactersActions.setCharacterActions({ characterId: overlayPayload, actions: fields }),
      )
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

  const optionsBars: T_CustomSelectOption[] = useMemo(
    () => settingsBars.map((bar) => ({ value: bar.id, label: <div>{bar.name}</div> })),
    [settingsBars],
  )

  return (
    <div>
      <S.OverlayHeader>
        <span>{t('battlefieldActionsEditor.title')}</span>
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
                onChange={(e) => update(index, { ...field, title: e.target.value })}
                placeholder={t('battlefieldActionsEditor.fields.title')}
              />
              <TextareaField
                value={field.description}
                onChange={(e) => update(index, { ...field, description: e.target.value })}
                placeholder={t('battlefieldActionsEditor.fields.description')}
                fullWidth
              />
              <div>{t('battlefieldActionsEditor.fields.target')}</div>
              <C.Row>
                <CustomSelectField
                  fieldIndex={index}
                  value={field.target.barId}
                  onChange={handleChangeSelectBar}
                  options={optionsBars}
                />
                <TextField
                  {...register(`actions.${index}.target.value`)}
                  placeholder={t('battlefieldActionsEditor.fields.value')}
                />
              </C.Row>
              <S.BlockRemove onClick={handleRemoveAction(index)}>
                <CloseIcon />
              </S.BlockRemove>
            </S.ContentBlock>
          ))}

          <S.BlockAdd onClick={handleAddAction}>
            <div>{t('battlefieldActionsEditor.actions.add')}</div>
            <PlusIcon />
          </S.BlockAdd>
        </S.ContentWrapper>
        <C.Divider decorated />
        <S.ContentBottom>
          <Button onClick={handleClose} mod={Button.mod.secondary}>
            {t('battlefieldActionsEditor.actions.cancel')}
          </Button>
          <Button onClick={handleSubmit(handleSaveActions)}>
            {t('battlefieldActionsEditor.actions.save')}
          </Button>
        </S.ContentBottom>
      </S.OverlayContent>
    </div>
  )
}
