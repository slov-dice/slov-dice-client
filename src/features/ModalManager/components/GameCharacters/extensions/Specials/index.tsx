import { useFieldArray, useForm } from 'react-hook-form'
import { v4 } from 'uuid'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { Button } from 'components/Buttons'
import { TextField } from 'components/InputFields'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_BaseCharacterSpecial } from 'models/shared/game/character'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const SpecialsTab = () => {
  const settingsSpecials = useStoreSelector((store) => store.room.game.characters.settings.specials)
  const dispatch = useStoreDispatch()

  const { control, register, handleSubmit } = useForm({
    defaultValues: { specials: settingsSpecials },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'specials',
  })

  const handleAddSpecial = () => {
    append({ id: v4(), name: '' })
  }

  const handleRemoveSpecial = (index: number) => () => {
    remove(index)
  }

  const handleUpdateSpecials = (data: { specials: T_BaseCharacterSpecial[] }) => {
    dispatch(roomActions.emitUpdateCharactersSettingsSpecials(data.specials))
  }

  return (
    <S.TabPanel>
      <S.SpecialsWrapper>
        {fields.map((field, index) => (
          <S.SpecialBlock key={field.id}>
            <TextField
              {...register(`specials.${index}.name`)}
              placeholder={t('modals.gameCharacters.tabs.specials.fields.name')}
            />
            <S.SpecialRemove onClick={handleRemoveSpecial(index)}>
              <CloseIcon />
            </S.SpecialRemove>
          </S.SpecialBlock>
        ))}
        <S.SpecialAdd onClick={handleAddSpecial}>
          <div>{t('modals.gameCharacters.tabs.specials.actions.add')}</div>
          <PlusIcon />
        </S.SpecialAdd>
      </S.SpecialsWrapper>

      <C.Divider decorated />

      <S.TabPanelBottom>
        <Button onClick={handleSubmit(handleUpdateSpecials)}>
          {t('modals.gameCharacters.tabs.specials.actions.save')}
        </Button>
      </S.TabPanelBottom>
    </S.TabPanel>
  )
}
