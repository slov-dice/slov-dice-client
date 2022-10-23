import { TabPanelBase, TabPanelBottomBase } from '../styles'

import { Button } from 'components/Buttons'
import { useStoreSelector } from 'hooks/useStoreSelector'
import * as C from 'styles/components'

export const SpecialsTab = () => {
  const settingsSpecials = useStoreSelector((store) => store.gameCharacters.settings.specials)

  return (
    <TabPanelBase>
      <div>SpecialsTab</div>
      {settingsSpecials.map((special) => (
        <div key={special.name}>
          <input value={special.name} />
          <input value={special.current} />
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
