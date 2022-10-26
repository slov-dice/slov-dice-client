import { useFieldArray, useForm } from 'react-hook-form'

import * as S from './styles'

import { Button } from 'components/Buttons'
import { TextField } from 'components/InputFields'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { T_CharacterSpecial } from 'models/game/character'
import * as C from 'styles/components'

export const SpecialsTab = () => {
  const settingsSpecials = useStoreSelector((store) => store.gameCharacters.settings.specials)
  const { setCharacterWindowSettingsSpecials } = useActions()

  const { control, register, handleSubmit } = useForm({
    defaultValues: { special: settingsSpecials },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'special',
  })

  const handleAddBar = () => {
    append({ name: '', current: 1 })
  }

  const handleRemoveBar = (index: number) => () => {
    remove(index)
  }

  const handleUpdateBars = (data: { special: T_CharacterSpecial[] }) => {
    setCharacterWindowSettingsSpecials(data.special)
  }

  return (
    <S.TabPanel>
      <S.SpecialsWrapper>
        {fields.map((special, index) => (
          <S.SpecialWrapper key={special.name}>
            <TextField {...register(`special.${index}.name`)} placeholder='Название' />
            <Button mod={Button.mod.secondary} onClick={handleRemoveBar(index)}>
              Удалить
            </Button>
          </S.SpecialWrapper>
        ))}
      </S.SpecialsWrapper>
      <C.Divider />

      <S.SpecialsActions>
        <Button mod={Button.mod.secondary} onClick={handleAddBar}>
          Добавить
        </Button>
      </S.SpecialsActions>
      <C.Divider decorated />

      <S.TabPanelBottom>
        <Button onClick={handleSubmit(handleUpdateBars)}>Сохранить</Button>
      </S.TabPanelBottom>
    </S.TabPanel>
  )
}
