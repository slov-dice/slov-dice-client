import { useFieldArray, useForm } from 'react-hook-form'
import { v4 } from 'uuid'

import * as S from './styles'

import { Button } from 'components/Buttons'
import { TextField } from 'components/InputFields'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'

export const BarsTab = () => {
  const settingsBars = useStoreSelector((store) => store.room.game.characters.settings.bars)
  const { setCharacterWindowSettingsBars } = useActions()

  const { control, register, handleSubmit } = useForm({ defaultValues: { bars: settingsBars } })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'bars',
  })

  const handleAddBar = () => {
    append({ id: v4(), color: '#71c6ce', name: { EN: '', RU: '' } })
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
          <S.BarBlock key={field.id}>
            <TextField {...register(`bars.${index}.name.RU`)} placeholder='Название' />
            <TextField {...register(`bars.${index}.name.EN`)} placeholder='Название' />
            <input type='color' {...register(`bars.${index}.color`)} />
            <Button mod={Button.mod.secondary} onClick={handleRemoveBar(index)}>
              Удалить
            </Button>
          </S.BarBlock>
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
