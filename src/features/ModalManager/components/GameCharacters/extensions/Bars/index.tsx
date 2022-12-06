import { useFieldArray, useForm } from 'react-hook-form'
import { v4 } from 'uuid'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { Button } from 'components/Buttons'
import { ColorField, TextField } from 'components/InputFields'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_BaseCharacterBar } from 'models/shared/game/character'
import * as C from 'styles/components'

export const BarsTab = () => {
  const settingsBars = useStoreSelector((store) => store.room.game.characters.settings.bars)
  const { emitUpdateCharactersWindowSettingsBars } = useActions()

  const { control, register, handleSubmit } = useForm({ defaultValues: { bars: settingsBars } })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'bars',
  })

  const handleAddBar = () => {
    append({ id: v4(), color: '#CD375D', name: '' })
  }

  const handleRemoveBar = (index: number) => () => {
    remove(index)
  }

  const handleUpdateBars = (data: { bars: T_BaseCharacterBar[] }) => {
    emitUpdateCharactersWindowSettingsBars(data.bars)
  }

  return (
    <S.TabPanel>
      <S.BarsWrapper>
        {fields.map((field, index) => (
          <S.BarBlock key={field.id}>
            <TextField
              {...register(`bars.${index}.name`)}
              placeholder={t('modals.gameCharacters.tabs.bars.fields.name')}
            />
            <ColorField {...register(`bars.${index}.color`)} fullWidth />
            <S.BarRemove onClick={handleRemoveBar(index)}>
              <CloseIcon />
            </S.BarRemove>
          </S.BarBlock>
        ))}
        <S.BarAdd onClick={handleAddBar}>
          <div>{t('modals.gameCharacters.tabs.bars.actions.add')}</div>
          <PlusIcon />
        </S.BarAdd>
      </S.BarsWrapper>

      <C.Divider decorated />

      <S.TabPanelBottom>
        <Button onClick={handleSubmit(handleUpdateBars)}>
          {t('modals.gameCharacters.tabs.bars.actions.save')}
        </Button>
      </S.TabPanelBottom>
    </S.TabPanel>
  )
}
