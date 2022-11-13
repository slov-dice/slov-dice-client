import { useFieldArray, useForm } from 'react-hook-form'

import * as S from './styles'

import { Button } from 'components/Buttons'
import { TextField, TextareaField, CustomSelectField } from 'components/InputFields'
import { T_CustomSelectOption } from 'components/InputFields/CustomSelectField/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_EffectType, T_BaseCharacterEffect } from 'models/shared/game/character'
import { E_EffectIcon } from 'models/shared/game/extra/effects'
import * as C from 'styles/components'
import { getGameIcon } from 'utils/game/effects/icons'
import { getRandomThousand } from 'utils/helpers/generators'

const optionsIcons: T_CustomSelectOption[] = Object.values(E_EffectIcon).map(
  (icon: E_EffectIcon) => ({
    value: icon,
    label: getGameIcon(icon),
  }),
)

const optionsTypes: T_CustomSelectOption[] = [
  {
    value: E_EffectType.negative,
    label: 'Негативный',
  },
  {
    value: E_EffectType.neutral,
    label: 'Нейтральный',
  },
  {
    value: E_EffectType.positive,
    label: 'Позитивный',
  },
]

export const EffectsTab = () => {
  const settingsEffects = useStoreSelector((store) => store.gameCharacters.settings.effects)
  const { setCharacterWindowSettingsEffects } = useActions()

  const { control, register, handleSubmit } = useForm({
    defaultValues: { effect: settingsEffects },
  })

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'effect',
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
      id: getRandomThousand(),
      icon: E_EffectIcon.brokenBone,
      type: E_EffectType.neutral,
      name: '',
      description: '',
    })
  }

  const handleRemoveEffect = (index: number) => () => {
    remove(index)
  }

  const handleUpdateEffects = (data: { effect: T_BaseCharacterEffect[] }) => {
    setCharacterWindowSettingsEffects(data.effect)
  }

  return (
    <S.TabPanel>
      <S.EffectsWrapper>
        {fields.map((field, index) => (
          <S.EffectWrapper key={field.id}>
            <CustomSelectField
              fieldIndex={index}
              value={field.type}
              onChange={handleChangeSelectType}
              options={optionsTypes}
            />
            <CustomSelectField
              fieldIndex={index}
              value={field.icon}
              onChange={handleChangeSelectIcon}
              options={optionsIcons}
            />
            <TextField {...register(`effect.${index}.name`)} />
            <TextareaField {...register(`effect.${index}.description`)} fullWidth />
            <Button mod={Button.mod.secondary} onClick={handleRemoveEffect(index)}>
              Удалить
            </Button>
          </S.EffectWrapper>
        ))}
      </S.EffectsWrapper>
      <C.Divider />

      <S.EffectsActions>
        <Button mod={Button.mod.secondary} onClick={handleAddEffect}>
          Добавить
        </Button>
      </S.EffectsActions>
      <C.Divider decorated />

      <S.TabPanelBottom>
        <Button onClick={handleSubmit(handleUpdateEffects)}>Сохранить</Button>
      </S.TabPanelBottom>
    </S.TabPanel>
  )
}
