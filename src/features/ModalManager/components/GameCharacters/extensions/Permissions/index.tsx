import { TabPanelBase, TabPanelBottomBase } from '../styles'

import { Button } from 'components/Buttons'
import * as C from 'styles/components'

export const PermissionsTab = () => {
  return (
    <TabPanelBase>
      <div>
        <input type='checkbox' />
        Игроки могут изменять других персонажей
      </div>
      <C.Divider />
      <div>
        <input type='checkbox' />
        Ведущие могут изменять других персонажей
      </div>
      <C.Divider decorated />

      <TabPanelBottomBase>
        <Button>Сохранить</Button>
      </TabPanelBottomBase>
    </TabPanelBase>
  )
}
