import { useFieldArray, useForm } from 'react-hook-form'

import * as S from './styles'

import { Button } from 'components/Buttons'
import { TextField } from 'components/InputFields'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'

export const BarsTab = () => {
  const settingsBars = useStoreSelector((store) => store.gameCharacters.settings.bars)
  const { setCharacterWindowSettingsBars } = useActions()

  const { control, register, handleSubmit } = useForm({ defaultValues: { bar: settingsBars } })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'bar',
  })

  const handleAddBar = () => {
    append({ color: '#ffffff', name: '', current: 100, max: 100 })
  }

  const handleRemoveBar = (index: number) => () => {
    remove(index)
  }

  const handleUpdateBars = (data: any) => {
    setCharacterWindowSettingsBars(data.bar)
  }

  return (
    <S.TabPanel>
      <S.BarsWrapper>
        {fields.map((field, index) => (
          <S.BarWrapper key={field.id}>
            <TextField {...register(`bar.${index}.name`)} placeholder='Название' />
            <input type='color' {...register(`bar.${index}.color`)} />
            <Button mod={Button.mod.secondary} onClick={handleRemoveBar(index)}>
              Удалить
            </Button>
          </S.BarWrapper>
        ))}
      </S.BarsWrapper>
      <C.Divider />

      <S.BarsActions>
        <Button mod={Button.mod.secondary} onClick={handleAddBar}>
          Добавить
        </Button>
      </S.BarsActions>
      <C.Divider decorated />

      <S.TabPanelBottom>
        <Button onClick={handleSubmit(handleUpdateBars)}>Сохранить</Button>
      </S.TabPanelBottom>
    </S.TabPanel>
  )
}
