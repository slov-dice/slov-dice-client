import { TabPanelBase, TabPanelBottomBase } from '../styles'

import { Button } from 'components/Buttons'
import * as C from 'styles/components'

export const PermissionsTab = () => {
  return (
    <TabPanelBase>
      <div>Игроки</div>
      <div>
        <input type='checkbox' />
        Могут изменять других персонажей
      </div>
      <div>
        <input type='checkbox' />
        Могут настраивать окно
      </div>
      <C.Divider />
      <div>Ведущие</div>
      <div>
        <input type='checkbox' />
        Могут изменять других персонажей
      </div>
      <div>
        <input type='checkbox' />
        Могут настраивать окно
      </div>
      <C.Divider decorated />

      <TabPanelBottomBase>
        <Button>Сохранить</Button>
      </TabPanelBottomBase>
    </TabPanelBase>
  )
}
