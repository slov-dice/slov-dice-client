import { TabPanelBase, TabPanelBottomBase } from '../styles'

import { Button } from 'components/Buttons'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'

export const EffectsTab = () => {
  const settingsEffects = useStoreSelector((store) => store.gameCharacters.settings.effects)

  return (
    <TabPanelBase>
      <div>EffectsTab</div>
      {settingsEffects.map((effect) => (
        <div key={effect.id}>
          <input value={effect.name} />
          <textarea value={effect.description} />
          <div>Выбор типа</div>
          <div>Выбор иконки</div>
        </div>
      ))}
      <Button mod={Button.mod.secondary}>Добавить+</Button>
      <C.Divider decorated />

      <TabPanelBottomBase>
        <Button>Сохранить</Button>
      </TabPanelBottomBase>
    </TabPanelBase>
  )
}
