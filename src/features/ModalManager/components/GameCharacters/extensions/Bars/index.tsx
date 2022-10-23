import { TabPanelBase, TabPanelBottomBase } from '../styles'

import { Button } from 'components/Buttons'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'

export const BarsTab = () => {
  const settingsBars = useStoreSelector((store) => store.gameCharacters.settings.bars)

  return (
    <TabPanelBase>
      <div>BarsTab</div>
      {settingsBars.map((bar) => (
        <div key={bar.name}>
          <input value={bar.name} />
          <input value={bar.current} />
          <input value={bar.max} />
          <input type='color' value={bar.color} />
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
