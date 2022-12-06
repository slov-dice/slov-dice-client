import { useFieldArray, useForm } from 'react-hook-form'
import { v4 } from 'uuid'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { Button } from 'components/Buttons'
import { TextField, TextareaField, CustomSelectField } from 'components/InputFields'
import { T_CustomSelectOption } from 'components/InputFields/CustomSelectField/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_EffectType, T_BaseCharacterEffect } from 'models/shared/game/character'
import { E_EffectIcon } from 'models/shared/game/extra/effects'
import * as C from 'styles/components'
import { getGameIcon } from 'utils/game/effects/icons'

const optionsIcons: T_CustomSelectOption[] = Object.values(E_EffectIcon).map(
  (icon: E_EffectIcon) => ({
    value: icon,
    label: getGameIcon(icon),
  }),
)

const optionsTypes: T_CustomSelectOption[] = [
  {
    value: E_EffectType.negative,
    label: t('modals.gameCharacters.tabs.effects.fields.type.negative'),
  },
  {
    value: E_EffectType.neutral,
    label: t('modals.gameCharacters.tabs.effects.fields.type.neutral'),
  },
  {
    value: E_EffectType.positive,
    label: t('modals.gameCharacters.tabs.effects.fields.type.positive'),
  },
]

export const EffectsTab = () => {
  const settingsEffects = useStoreSelector((store) => store.room.game.characters.settings.effects)
  const { emitUpdateCharactersWindowSettingsEffects } = useActions()

  const { control, register, handleSubmit } = useForm({
    defaultValues: { effects: settingsEffects },
  })

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'effects',
    keyName: 'fieldId',
  })

  const handleChangeSelectIcon = (option: T_CustomSelectOption, fieldIndex?: number) => {
    if (fieldIndex !== undefined && fieldIndex >= 0) {
      update(fieldIndex, { ...fields[fieldIndex], icon: option.value as E_EffectIcon })
    }
  }

  const handleChangeSelectType = (option: T_CustomSelectOption, fieldIndex?: number) => {
    if (fieldIndex !== undefined && fieldIndex >= 0) {
      update(fieldIndex, { ...fields[fieldIndex], type: option.value as E_EffectType })
    }
  }

  const handleAddEffect = () => {
    append({
      id: '3',
      icon: E_EffectIcon.brokenBone,
      type: E_EffectType.neutral,
      name: '',
      description: '',
    })
  }

  const handleRemoveEffect = (index: number) => () => {
    remove(index)
  }

  const handleUpdateEffects = (data: { effects: T_BaseCharacterEffect[] }) => {
    emitUpdateCharactersWindowSettingsEffects(data.effects)
  }

  return (
    <S.TabPanel>
      <S.EffectsWrapper>
        {fields.map((field, index) => (
          <S.EffectWrapper key={field.id}>
            <CustomSelectField
              fieldIndex={index}
              value={field.icon}
              onChange={handleChangeSelectIcon}
              options={optionsIcons}
            />
            <CustomSelectField
              fieldIndex={index}
              value={field.type}
              onChange={handleChangeSelectType}
              options={optionsTypes}
            />
            <TextField
              {...register(`effects.${index}.name`)}
              placeholder={t('modals.gameCharacters.tabs.effects.fields.name')}
            />
            <TextareaField
              {...register(`effects.${index}.description`)}
              placeholder={t('modals.gameCharacters.tabs.effects.fields.description')}
              fullWidth
            />
            <S.EffectRemove onClick={handleRemoveEffect(index)}>
              <CloseIcon />
            </S.EffectRemove>
          </S.EffectWrapper>
        ))}
        <S.EffectAdd onClick={handleAddEffect}>
          <div>{t('modals.gameCharacters.tabs.effects.actions.add')}</div>
          <PlusIcon />
        </S.EffectAdd>
      </S.EffectsWrapper>
      <C.Divider decorated />

      <S.TabPanelBottom>
        <Button onClick={handleSubmit(handleUpdateEffects)}>
          {t('modals.gameCharacters.tabs.effects.actions.save')}
        </Button>
      </S.TabPanelBottom>
    </S.TabPanel>
  )
}
