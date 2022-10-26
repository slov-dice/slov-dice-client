import * as S from './styles'

import { Button } from 'components/Buttons'
import { TextField, TextareaField, SelectField } from 'components/InputFields'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'

export const EffectsTab = () => {
  const settingsEffects = useStoreSelector((store) => store.gameCharacters.settings.effects)

  // const effectsOption =

  return (
    <S.TabPanel>
      <S.EffectsWrapper>
        {settingsEffects.map((effect) => (
          <S.EffectWrapper key={effect.id}>
            <div>Выбор типа</div>
            <div>Выбор иконки </div>
            {/* <SelectField
              value={selectedSizeOption}
              onChange={(item) => handleSelectSize(item)}
              options={sizeOptions}
              fullWidth
            /> */}
            <TextField value={effect.name} />
            <TextareaField fullWidth value={effect.description} />
          </S.EffectWrapper>
        ))}
      </S.EffectsWrapper>
      <C.Divider />

      <S.EffectsActions>
        <Button mod={Button.mod.secondary}>Добавить</Button>
      </S.EffectsActions>
      <C.Divider decorated />

      <S.TabPanelBottom>
        <Button>Сохранить</Button>
      </S.TabPanelBottom>
    </S.TabPanel>
  )
}
