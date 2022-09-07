import * as S from './styles'

import {
  E_TaskItemActionType,
  E_TaskItemVisibility,
  T_TaskItemActionPayload,
} from 'features/Header/models'
import { changeToolbarItemIcon } from 'features/Header/slice'
import { E_Modals } from 'features/ModalManager/models'
import { openModal } from 'features/ModalManager/slice'
import { E_Panels } from 'features/SidePanel/models'
import { closeSidePanel, openSidePanel } from 'features/SidePanel/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { FullScreen } from 'utils/helpers/fullScreen'
import { E_Icon, getIcon } from 'utils/helpers/icons'

export const Toolbar = () => {
  const { toolbar, sidePanel, isAuth } = useStoreSelector((state) => ({
    toolbar: state.header.toolbar,
    sidePanel: state.sidePanel.panel,
    isAuth: state.profile.statuses.isAuth,
  }))
  const dispatch = useStoreDispatch()

  const handleAction = (type: E_TaskItemActionType, payload: T_TaskItemActionPayload) => () => {
    if (type === E_TaskItemActionType.modal) {
      dispatch(openModal(payload as E_Modals))
    } else if (type === E_TaskItemActionType.panel) {
      if (sidePanel === payload) {
        dispatch(closeSidePanel())
        return
      }
      dispatch(openSidePanel(payload as E_Panels))
    } else if (type === E_TaskItemActionType.fullScreen) {
      FullScreen.toggle()
      const icon = FullScreen.getValue() ? E_Icon.expand : E_Icon.compress
      dispatch(changeToolbarItemIcon({ name: 'full-screen', icon }))
    }
  }

  return (
    <S.Toolbar>
      {toolbar.map((item) => {
        if (isAuth && item.visibility.includes(E_TaskItemVisibility.authenticated))
          return (
            <ToolbarItem
              key={item.name}
              icon={item.icon}
              onClick={handleAction(item.actionType, item.actionPayload)}
            />
          )

        if (item.visibility.includes(E_TaskItemVisibility.all))
          return (
            <ToolbarItem
              key={item.name}
              icon={item.icon}
              onClick={handleAction(item.actionType, item.actionPayload)}
            />
          )
      })}
    </S.Toolbar>
  )
}

interface I_ToolbarItemProps {
  icon: E_Icon
  onClick: () => void
}

const ToolbarItem = ({ icon, onClick }: I_ToolbarItemProps) => (
  <S.ToolbarItem $isDivider={icon === E_Icon.divider} onClick={onClick}>
    {getIcon(icon)}
  </S.ToolbarItem>
)
